/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const LinkEndpointType: core.serialization.Schema<
    serializers.LinkEndpointType.Raw,
    DevRevBeta.LinkEndpointType
> = core.serialization.enum_(["capability", "conversation", "enhancement", "feature", "issue", "product", "ticket"]);

export declare namespace LinkEndpointType {
    type Raw = "capability" | "conversation" | "enhancement" | "feature" | "issue" | "product" | "ticket";
}