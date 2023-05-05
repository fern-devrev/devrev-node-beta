/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ErrorUnauthorized: core.serialization.ObjectSchema<
    serializers.ErrorUnauthorized.Raw,
    DevRevBeta.ErrorUnauthorized
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).ErrorUnauthorizedType).optional(),
});

export declare namespace ErrorUnauthorized {
    interface Raw {
        type?: serializers.ErrorUnauthorizedType.Raw | null;
    }
}