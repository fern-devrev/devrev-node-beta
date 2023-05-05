/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const LinksDeleteResponse: core.serialization.Schema<
    serializers.LinksDeleteResponse.Raw,
    DevRevBeta.LinksDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace LinksDeleteResponse {
    type Raw = Record<string, unknown>;
}