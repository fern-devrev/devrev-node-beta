/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ErrorTooManyRequests: core.serialization.ObjectSchema<
    serializers.ErrorTooManyRequests.Raw,
    DevRevBeta.ErrorTooManyRequests
> = core.serialization.object({
    retryAfter: core.serialization.property("retry_after", core.serialization.number().optional()),
    type: core.serialization.lazy(async () => (await import("..")).ErrorTooManyRequestsType).optional(),
});

export declare namespace ErrorTooManyRequests {
    interface Raw {
        retry_after?: number | null;
        type?: serializers.ErrorTooManyRequestsType.Raw | null;
    }
}
