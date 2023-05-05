/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaFieldDescriptorBase: core.serialization.ObjectSchema<
    serializers.SchemaFieldDescriptorBase.Raw,
    DevRevBeta.SchemaFieldDescriptorBase
> = core.serialization.object({
    description: core.serialization.string().optional(),
    isFilterable: core.serialization.property("is_filterable", core.serialization.boolean().optional()),
    isPersonallyIdentifiableInformation: core.serialization.property(
        "is_personally_identifiable_information",
        core.serialization.boolean().optional()
    ),
    isRequired: core.serialization.property("is_required", core.serialization.boolean().optional()),
    name: core.serialization.string(),
    origin: core.serialization.string().optional(),
});

export declare namespace SchemaFieldDescriptorBase {
    interface Raw {
        description?: string | null;
        is_filterable?: boolean | null;
        is_personally_identifiable_information?: boolean | null;
        is_required?: boolean | null;
        name: string;
        origin?: string | null;
    }
}