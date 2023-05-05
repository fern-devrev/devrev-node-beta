/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const CustomSchemaFragmentType: core.serialization.Schema<
    serializers.CustomSchemaFragmentType.Raw,
    DevRevBeta.CustomSchemaFragmentType
> = core.serialization.string();

export declare namespace CustomSchemaFragmentType {
    type Raw = string;
}
