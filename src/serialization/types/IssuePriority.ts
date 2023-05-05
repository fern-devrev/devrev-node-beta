/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const IssuePriority: core.serialization.Schema<serializers.IssuePriority.Raw, DevRevBeta.IssuePriority> =
    core.serialization.enum_(["p0", "p1", "p2", "p3"]);

export declare namespace IssuePriority {
    type Raw = "p0" | "p1" | "p2" | "p3";
}
