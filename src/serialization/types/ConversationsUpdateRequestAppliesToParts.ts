/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ConversationsUpdateRequestAppliesToParts: core.serialization.ObjectSchema<
    serializers.ConversationsUpdateRequestAppliesToParts.Raw,
    DevRevBeta.ConversationsUpdateRequestAppliesToParts
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ConversationsUpdateRequestAppliesToParts {
    interface Raw {
        set?: string[] | null;
    }
}