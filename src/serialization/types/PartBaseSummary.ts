/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const PartBaseSummary: core.serialization.ObjectSchema<
    serializers.PartBaseSummary.Raw,
    DevRevBeta.PartBaseSummary
> = core.serialization
    .object({
        name: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AtomBaseSummary));

export declare namespace PartBaseSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {
        name: string;
    }
}
