/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaTokensFieldDescriptor: core.serialization.ObjectSchema<
    serializers.SchemaTokensFieldDescriptor.Raw,
    DevRevBeta.SchemaTokensFieldDescriptor
> = core.serialization.object({
    contains: core.serialization.string().optional(),
    defaultValue: core.serialization.property("default_value", core.serialization.string().optional()),
    eqLen: core.serialization.property("eq_len", core.serialization.number().optional()),
    maxLen: core.serialization.property("max_len", core.serialization.number().optional()),
    minLen: core.serialization.property("min_len", core.serialization.number().optional()),
    pattern: core.serialization.string().optional(),
    prefix: core.serialization.string().optional(),
    suffix: core.serialization.string().optional(),
});

export declare namespace SchemaTokensFieldDescriptor {
    interface Raw {
        contains?: string | null;
        default_value?: string | null;
        eq_len?: number | null;
        max_len?: number | null;
        min_len?: number | null;
        pattern?: string | null;
        prefix?: string | null;
        suffix?: string | null;
    }
}
