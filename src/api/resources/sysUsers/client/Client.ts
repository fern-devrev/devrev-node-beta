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

export declare namespace SysUsers {
    interface Options {
        environment?: environments.DevRevBetaEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class SysUsers {
    constructor(protected readonly options: SysUsers.Options) {}

    /**
     * Lists system users within your organization.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async list(request: DevRevBeta.SysUsersListRequest = {}): Promise<DevRevBeta.SysUsersListResponse> {
        const { cursor, limit, mode, sortBy } = request;
        const _queryParams = new URLSearchParams();
        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (mode != null) {
            _queryParams.append("mode", mode);
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

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevBetaEnvironment.Default, "sys-users.list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "beta-0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.SysUsersListResponse.parseOrThrow(_response.body, {
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
     * Updates the system user.
     * @throws {DevRevBeta.BadRequestError}
     * @throws {DevRevBeta.UnauthorizedError}
     * @throws {DevRevBeta.ForbiddenError}
     * @throws {DevRevBeta.NotFoundError}
     * @throws {DevRevBeta.TooManyRequestsError}
     * @throws {DevRevBeta.InternalServerError}
     * @throws {DevRevBeta.ServiceUnavailableError}
     */
    public async update(request: DevRevBeta.SysUsersUpdateRequest): Promise<DevRevBeta.SysUsersUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevBetaEnvironment.Default, "sys-users.update"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev-beta",
                "X-Fern-SDK-Version": "beta-0.1",
            },
            contentType: "application/json",
            body: await serializers.SysUsersUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.SysUsersUpdateResponse.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.apiKey);
        if (value != null) {
            return value;
        }

        return undefined;
    }
}
