/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ConversationsExportResponse: core.serialization.ObjectSchema<
    serializers.ConversationsExportResponse.Raw,
    DevRevBeta.ConversationsExportResponse
> = core.serialization.object({
    conversations: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).Conversation)
    ),
});

export declare namespace ConversationsExportResponse {
    interface Raw {
        conversations: serializers.Conversation.Raw[];
    }
}
