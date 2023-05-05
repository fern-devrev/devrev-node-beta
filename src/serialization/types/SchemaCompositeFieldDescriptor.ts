/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaCompositeFieldDescriptor: core.serialization.ObjectSchema<
    serializers.SchemaCompositeFieldDescriptor.Raw,
    DevRevBeta.SchemaCompositeFieldDescriptor
> = core.serialization.object({
    compositeType: core.serialization.property("composite_type", core.serialization.string().optional()),
});

export declare namespace SchemaCompositeFieldDescriptor {
    interface Raw {
        composite_type?: string | null;
    }
}