/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ConversationsCreateResponse: core.serialization.ObjectSchema<
    serializers.ConversationsCreateResponse.Raw,
    DevRevBeta.ConversationsCreateResponse
> = core.serialization.object({
    conversation: core.serialization.lazyObject(async () => (await import("..")).Conversation),
});

export declare namespace ConversationsCreateResponse {
    interface Raw {
        conversation: serializers.Conversation.Raw;
    }
}
