/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const Stage: core.serialization.ObjectSchema<serializers.Stage.Raw, DevRevBeta.Stage> =
    core.serialization.object({
        name: core.serialization.string(),
    });

export declare namespace Stage {
    interface Raw {
        name: string;
    }
}
