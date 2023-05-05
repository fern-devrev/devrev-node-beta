/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const TimelineEntryBase: core.serialization.ObjectSchema<
    serializers.TimelineEntryBase.Raw,
    DevRevBeta.TimelineEntryBase
> = core.serialization.lazyObject(async () => (await import("..")).AtomBase);

export declare namespace TimelineEntryBase {
    type Raw = serializers.AtomBase.Raw;
}