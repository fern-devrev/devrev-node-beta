/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ErrorTooManyRequestsType: core.serialization.Schema<
    serializers.ErrorTooManyRequestsType.Raw,
    DevRevBeta.ErrorTooManyRequestsType
> = core.serialization.enum_(["too_many_requests"]);

export declare namespace ErrorTooManyRequestsType {
    type Raw = "too_many_requests";
}
