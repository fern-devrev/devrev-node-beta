/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const EnhancementSummary: core.serialization.ObjectSchema<
    serializers.EnhancementSummary.Raw,
    DevRevBeta.EnhancementSummary
> = core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary);

export declare namespace EnhancementSummary {
    type Raw = serializers.PartBaseSummary.Raw;
}
