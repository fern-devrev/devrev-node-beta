/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const RevUsersDeleteResponse: core.serialization.Schema<
    serializers.RevUsersDeleteResponse.Raw,
    DevRevBeta.RevUsersDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace RevUsersDeleteResponse {
    type Raw = Record<string, unknown>;
}