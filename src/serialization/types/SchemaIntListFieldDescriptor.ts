/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaIntListFieldDescriptor: core.serialization.ObjectSchema<
    serializers.SchemaIntListFieldDescriptor.Raw,
    DevRevBeta.SchemaIntListFieldDescriptor
> = core.serialization.object({
    defaultValue: core.serialization.property(
        "default_value",
        core.serialization.list(core.serialization.number()).optional()
    ),
    gt: core.serialization.number().optional(),
    gte: core.serialization.number().optional(),
    lt: core.serialization.number().optional(),
    lte: core.serialization.number().optional(),
});

export declare namespace SchemaIntListFieldDescriptor {
    interface Raw {
        default_value?: number[] | null;
        gt?: number | null;
        gte?: number | null;
        lt?: number | null;
        lte?: number | null;
    }
}
