/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const CustomSchemaFragmentsSetResponse: core.serialization.ObjectSchema<
    serializers.CustomSchemaFragmentsSetResponse.Raw,
    DevRevBeta.CustomSchemaFragmentsSetResponse
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace CustomSchemaFragmentsSetResponse {
    interface Raw {
        id: string;
    }
}
