/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const CustomStagesListResponse: core.serialization.ObjectSchema<
    serializers.CustomStagesListResponse.Raw,
    DevRevBeta.CustomStagesListResponse
> = core.serialization.object({
    cursor: core.serialization.string().optional(),
    result: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).CustomStage)),
});

export declare namespace CustomStagesListResponse {
    interface Raw {
        cursor?: string | null;
        result: serializers.CustomStage.Raw[];
    }
}