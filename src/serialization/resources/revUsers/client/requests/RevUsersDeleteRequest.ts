/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DevRevBeta from "../../../../../api";
import * as core from "../../../../../core";

export const RevUsersDeleteRequest: core.serialization.Schema<
    serializers.RevUsersDeleteRequest.Raw,
    DevRevBeta.RevUsersDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace RevUsersDeleteRequest {
    interface Raw {
        id: string;
    }
}
