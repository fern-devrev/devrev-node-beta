/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DevRevBeta from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Customization {
    interface Options {
        environment?: environments.DevRevBetaEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class Customization {
    constructor(protected readonly options: Customization.Options) {}

    /**
     * Gets the aggregated schema.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.NotFoundError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async aggregatedSchemaGet(
        request: DevRevBeta.AggregatedSchemaGetRequest
    ): Promise<DevRevBeta.AggregatedSchemaGetResponse> {
        const { customSchemaFragmentIds, stockSchemaFragmentId } = request;
        const _queryParams = new URLSearchParams();
        if (customSchemaFragmentIds != null) {
            if (Array.isArray(customSchemaFragmentIds)) {
                for (const _item of customSchemaFragmentIds) {
                    _queryParams.append("custom_schema_fragment_ids", _item);
                }
            } else {
                _queryParams.append("custom_schema_fragment_ids", customSchemaFragmentIds);
            }
        }

        _queryParams.append("stock_schema_fragment_id", stockSchemaFragmentId);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.DevRevBetaEnvironment.Default,
                "schemas.aggregated.get"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AggregatedSchemaGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRevBeta.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRevBeta.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRevBeta.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRevBeta.NotFoundError(
                        await serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRevBeta.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRevBeta.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRevBeta.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevBetaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevBetaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevBetaTimeoutError();
            case "unknown":
                throw new errors.DevRevBetaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a custom schema fragment.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.NotFoundError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async customSchemaFragmentsGet(
        request: DevRevBeta.CustomSchemaFragmentsGetRequest
    ): Promise<DevRevBeta.CustomSchemaFragmentsGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevBetaEnvironment.Default, "schemas.custom.get"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CustomSchemaFragmentsGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRevBeta.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRevBeta.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRevBeta.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRevBeta.NotFoundError(
                        await serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRevBeta.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRevBeta.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRevBeta.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevBetaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevBetaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevBetaTimeoutError();
            case "unknown":
                throw new errors.DevRevBetaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists custom schema fragments.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async customSchemaFragmentsList(
        request: DevRevBeta.CustomSchemaFragmentsListRequest = {}
    ): Promise<DevRevBeta.CustomSchemaFragmentsListResponse> {
        const { app, cursor, leafType, limit, sortBy, subtype, types } = request;
        const _queryParams = new URLSearchParams();
        if (app != null) {
            if (Array.isArray(app)) {
                for (const _item of app) {
                    _queryParams.append("app", _item);
                }
            } else {
                _queryParams.append("app", app);
            }
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (leafType != null) {
            if (Array.isArray(leafType)) {
                for (const _item of leafType) {
                    _queryParams.append("leaf_type", _item);
                }
            } else {
                _queryParams.append("leaf_type", leafType);
            }
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (sortBy != null) {
            if (Array.isArray(sortBy)) {
                for (const _item of sortBy) {
                    _queryParams.append("sort_by", _item);
                }
            } else {
                _queryParams.append("sort_by", sortBy);
            }
        }

        if (subtype != null) {
            if (Array.isArray(subtype)) {
                for (const _item of subtype) {
                    _queryParams.append("subtype", _item);
                }
            } else {
                _queryParams.append("subtype", subtype);
            }
        }

        if (types != null) {
            if (Array.isArray(types)) {
                for (const _item of types) {
                    _queryParams.append("types", _item);
                }
            } else {
                _queryParams.append("types", types);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevBetaEnvironment.Default, "schemas.custom.list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CustomSchemaFragmentsListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRevBeta.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRevBeta.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRevBeta.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRevBeta.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRevBeta.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRevBeta.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevBetaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevBetaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevBetaTimeoutError();
            case "unknown":
                throw new errors.DevRevBetaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates or updates a custom schema fragment.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async customSchemaFragmentsSet(
        request: DevRevBeta.CustomSchemaFragmentsSetRequest
    ): Promise<DevRevBeta.CustomSchemaFragmentsSetResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevBetaEnvironment.Default, "schemas.custom.set"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            body: await serializers.CustomSchemaFragmentsSetRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CustomSchemaFragmentsSetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRevBeta.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRevBeta.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRevBeta.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRevBeta.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRevBeta.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRevBeta.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevBetaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevBetaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevBetaTimeoutError();
            case "unknown":
                throw new errors.DevRevBetaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists subtypes.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async subtypesList(request: DevRevBeta.SubtypesListRequest): Promise<DevRevBeta.SubtypesListResponse> {
        const { leafType } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("leaf_type", leafType);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.DevRevBetaEnvironment.Default,
                "schemas.subtypes.list"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.SubtypesListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRevBeta.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRevBeta.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRevBeta.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRevBeta.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRevBeta.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRevBeta.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevBetaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevBetaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevBetaTimeoutError();
            case "unknown":
                throw new errors.DevRevBetaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.apiKey);
        if (value != null) {
            return value;
        }

        return undefined;
    }
}
