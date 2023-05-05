/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ConversationSummary: core.serialization.ObjectSchema<
    serializers.ConversationSummary.Raw,
    DevRevBeta.ConversationSummary
> = core.serialization.object({
    title: core.serialization.string().optional(),
});

export declare namespace ConversationSummary {
    interface Raw {
        title?: string | null;
    }
}
