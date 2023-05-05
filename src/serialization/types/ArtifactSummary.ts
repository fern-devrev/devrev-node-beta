/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ArtifactSummary: core.serialization.ObjectSchema<
    serializers.ArtifactSummary.Raw,
    DevRevBeta.ArtifactSummary
> = core.serialization.lazyObject(async () => (await import("..")).AtomBaseSummary);

export declare namespace ArtifactSummary {
    type Raw = serializers.AtomBaseSummary.Raw;
}
