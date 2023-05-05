/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SetTagWithValue: core.serialization.ObjectSchema<
    serializers.SetTagWithValue.Raw,
    DevRevBeta.SetTagWithValue
> = core.serialization.object({
    id: core.serialization.string(),
    value: core.serialization.string().optional(),
});

export declare namespace SetTagWithValue {
    interface Raw {
        id: string;
        value?: string | null;
    }
}
