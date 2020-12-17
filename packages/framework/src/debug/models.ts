/*
 * Deepkit Framework
 * Copyright (C) 2020 Deepkit UG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {entity, t} from '@deepkit/type';
import {LoggerLevel} from '../logger';

@entity.name('debugRequest')
export class DebugRequest {
    @t.primary.autoIncrement id: number = 0;
    @t created: Date = new Date;
    @t.optional statusCode?: number;

    constructor(
        @t public url: string,
        @t public clientIp: string,
    ) {
    }
}