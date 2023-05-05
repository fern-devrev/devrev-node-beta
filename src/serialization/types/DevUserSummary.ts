/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const DevUserSummary: core.serialization.ObjectSchema<
    serializers.DevUserSummary.Raw,
    DevRevBeta.DevUserSummary
> = core.serialization.lazyObject(async () => (await import("..")).UserBaseSummary);

export declare namespace DevUserSummary {
    type Raw = serializers.UserBaseSummary.Raw;
}
