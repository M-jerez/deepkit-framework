# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.1-alpha.131](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.130...v1.0.1-alpha.131) (2024-02-09)

### Bug Fixes

- **rpc:** error Observable Subscribers when no Observable Next type can be detected ([e207fea](https://github.com/deepkit/deepkit-framework/commit/e207fea1d9abbb61f8e33d8253fe3ce5e23022d0))

## [1.0.1-alpha.128](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.127...v1.0.1-alpha.128) (2024-02-06)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.126](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.125...v1.0.1-alpha.126) (2024-02-06)

### Bug Fixes

- **rpc:** wrong ESM import ([1426627](https://github.com/deepkit/deepkit-framework/commit/14266273c30414513aed4ae7667697f19d852098))

## [1.0.1-alpha.124](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.123...v1.0.1-alpha.124) (2024-02-04)

### Bug Fixes

- **type:** handle more circular types ([5f6bd12](https://github.com/deepkit/deepkit-framework/commit/5f6bd124aaf9c546014b81dbded8110312f4e819)), closes [#477](https://github.com/deepkit/deepkit-framework/issues/477)

## [1.0.1-alpha.123](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.122...v1.0.1-alpha.123) (2024-02-02)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.122](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.121...v1.0.1-alpha.122) (2024-01-31)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.121](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.120...v1.0.1-alpha.121) (2024-01-31)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.120](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.119...v1.0.1-alpha.120) (2024-01-29)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.119](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.118...v1.0.1-alpha.119) (2024-01-28)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.117](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.116...v1.0.1-alpha.117) (2024-01-26)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.116](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.115...v1.0.1-alpha.116) (2024-01-22)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.114](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.113...v1.0.1-alpha.114) (2024-01-21)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.113](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.112...v1.0.1-alpha.113) (2024-01-17)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.112](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.111...v1.0.1-alpha.112) (2024-01-16)

### Features

- **rpc:** make kernel connection available in kernel security ([#536](https://github.com/deepkit/deepkit-framework/issues/536)) ([32252b0](https://github.com/deepkit/deepkit-framework/commit/32252b0c1327ec093215602c936d287c20f0a66e))

## [1.0.1-alpha.111](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.110...v1.0.1-alpha.111) (2024-01-15)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.110](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.109...v1.0.1-alpha.110) (2024-01-11)

**Note:** Version bump only for package @deepkit/rpc

## [1.0.1-alpha.109](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.108...v1.0.1-alpha.109) (2024-01-10)

### Bug Fixes

- **rpc:** defer resolving class name ([68fe2a9](https://github.com/deepkit/deepkit-framework/commit/68fe2a9e7bef13462bd304d0d4b55f3afec1b5db))
- **rpc:** tests with controller path resolution based on reflection ([6909fa8](https://github.com/deepkit/deepkit-framework/commit/6909fa846a7880feeecf0323e5e507ba8f929a72))

## [1.0.1-alpha.108](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.107...v1.0.1-alpha.108) (2023-11-21)

### Bug Fixes

- **rpc:** correctly load controller name ([9d603db](https://github.com/deepkit/deepkit-framework/commit/9d603dbf752cfe5335d2c89c4c785a23e8400e0e))
- **rpc:** race condition in disconnect() when connect is still in progress ([f2d708d](https://github.com/deepkit/deepkit-framework/commit/f2d708dfa0dbcfde218aaeea864eb323291ea45a))

### Features

- **rpc:** make controller decorator name optional ([#491](https://github.com/deepkit/deepkit-framework/issues/491)) ([525ed39](https://github.com/deepkit/deepkit-framework/commit/525ed39157334bab05c923fa9de6426d1c496d29))

## [1.0.1-alpha.105](https://github.com/deepkit/deepkit-framework/compare/v1.0.1-alpha.103...v1.0.1-alpha.105) (2023-10-23)

### Bug Fixes

- **rpc:** move controllerAccess to handleAction to not call it twice. ([c68308d](https://github.com/deepkit/deepkit-framework/commit/c68308de9c28f8f72bc65c7e25fb08d6555f1383))
