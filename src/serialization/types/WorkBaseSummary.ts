/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const WorkBaseSummary: core.serialization.ObjectSchema<
    serializers.WorkBaseSummary.Raw,
    DevRevBeta.WorkBaseSummary
> = core.serialization.object({
    title: core.serialization.string().optional(),
});

export declare namespace WorkBaseSummary {
    interface Raw {
        title?: string | null;
    }
}