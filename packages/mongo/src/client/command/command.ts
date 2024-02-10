/*
 * Deepkit Framework
 * Copyright (C) 2021 Deepkit UG, Marc J. Schmidt
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 *
 * You should have received a copy of the MIT License along with this program.
 */

import { asyncOperation, getClassName } from '@deepkit/core';
import { handleErrorResponse, MongoDatabaseError, MongoError } from '../error.js';
import { MongoClientConfig } from '../config.js';
import { Host } from '../host.js';
import type { MongoDatabaseTransaction } from '../connection.js';
import { ReceiveType, resolveReceiveType, SerializationError, stringifyType, Type, typeOf, typeSettings, UnpopulatedCheck, ValidationError } from '@deepkit/type';
import { BSONDeserializer, deserializeBSONWithoutOptimiser, getBSONDeserializer } from '@deepkit/bson';
import { mongoBinarySerializer } from '../../mongo-serializer.js';

export interface BaseResponse {
    ok: number;
    errmsg?: string;
    code?: number;
    codeName?: string;
    writeErrors?: Array<{ index: number, code: number, errmsg: string }>;
}

export abstract class Command<T> {
    protected current?: { responseType?: Type, resolve: Function, reject: Function };

    public sender?: <T>(schema: Type, message: T) => void;

    public sendAndWait<T, R extends BaseResponse = BaseResponse>(
        message: T, messageType?: ReceiveType<T>, responseType?: ReceiveType<R>,
    ): Promise<R> {
        if (!this.sender) throw new Error(`No sender set in command ${getClassName(this)}`);
        this.sender(resolveReceiveType(messageType), message);

        return asyncOperation((resolve, reject) => {
            this.current = { resolve, reject, responseType: responseType ? resolveReceiveType(responseType) : typeOf<BaseResponse>() };
        });
    }

    abstract execute(config: MongoClientConfig, host: Host, transaction?: MongoDatabaseTransaction): Promise<T>;

    abstract needsWritableHost(): boolean;

    handleResponse(response: Uint8Array): void {
        if (!this.current) throw new Error('Got handleResponse without active command');
        const deserializer: BSONDeserializer<BaseResponse> = this.current.responseType ? getBSONDeserializer(mongoBinarySerializer, this.current.responseType) : deserializeBSONWithoutOptimiser;

        const oldCheck = typeSettings.unpopulatedCheck;
        try {
            typeSettings.unpopulatedCheck = UnpopulatedCheck.None;
            const message = deserializer(response);
            const error = handleErrorResponse(message);
            if (error) {
                this.current.reject(error);
                return;
            }

            if (!message.ok) {
                this.current.reject(Object.assign(new MongoDatabaseError(message.errmsg || 'error'), { code: message.code }));
            } else {
                this.current.resolve(message);
            }
        } catch (error: any) {
            if (error instanceof ValidationError || error instanceof SerializationError) {
                if (this.current.responseType) {
                    const raw = deserializeBSONWithoutOptimiser(response);
                    if (raw.errmsg && raw.ok === 0) {
                        const error = handleErrorResponse(raw);
                        if (error) {
                            this.current.reject(error);
                            return;
                        }
                    }

                    this.current.reject(new MongoError(`Could not deserialize type ${stringifyType(this.current.responseType)}: ${error}`));
                    return;
                }
            }
            this.current.reject(error);
        } finally {
            typeSettings.unpopulatedCheck = oldCheck;
        }
    }
}

export function createCommand<Request extends {}, Response extends BaseResponse>(
    request: Request,
    options: Partial<{ needsWritableHost: boolean }> = {},
    typeRequest?: ReceiveType<Request>,
    typeResponse?: ReceiveType<Response>,
): Command<Response> {
    class DynamicCommand extends Command<Response> {
        async execute(): Promise<Response> {
            return this.sendAndWait(request, typeRequest, typeResponse);
        }

        needsWritableHost(): boolean {
            return options.needsWritableHost || false;
        }
    }

    return new DynamicCommand();
}

