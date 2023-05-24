/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaDoubleFieldDescriptor: core.serialization.ObjectSchema<
    serializers.SchemaDoubleFieldDescriptor.Raw,
    DevRevBeta.SchemaDoubleFieldDescriptor
> = core.serialization
    .object({
        defaultValue: core.serialization.property("default_value", core.serialization.number().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).SchemaFieldDescriptorBase));

export declare namespace SchemaDoubleFieldDescriptor {
    interface Raw extends serializers.SchemaFieldDescriptorBase.Raw {
        default_value?: number | null;
    }
}
