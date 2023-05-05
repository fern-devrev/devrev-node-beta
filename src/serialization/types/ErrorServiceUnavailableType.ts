/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ErrorServiceUnavailableType: core.serialization.Schema<
    serializers.ErrorServiceUnavailableType.Raw,
    DevRevBeta.ErrorServiceUnavailableType
> = core.serialization.enum_(["service_unavailable"]);

export declare namespace ErrorServiceUnavailableType {
    type Raw = "service_unavailable";
}
