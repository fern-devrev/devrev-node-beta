/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "../../../..";

export interface ConversationsListRequest {
    /**
     * Filters for conversations belonging to any of the provided parts.
     *
     */
    appliesToParts?: string | string[];
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * Filters for conversation that belong to the given groups.
     */
    group?: string | string[];
    /**
     * The maximum number of conversations to return. The default is '50'.
     *
     */
    limit?: number;
    /**
     * Filters for conversations where these users are participants.
     *
     */
    members?: string | string[];
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     *
     */
    mode?: DevRevBeta.ListMode;
    /**
     * Filters for conversations owned by any of these users.
     */
    ownedBy?: string | string[];
    /**
     * Filters for conversations that are associated with any of the
     * provided Rev organizations.
     *
     */
    revOrg?: string | string[];
    /**
     * Filters for conversations with any of the provided source channels.
     *
     */
    sourceChannels?: string | string[];
    /**
     * Filters for records in the provided stage(s).
     */
    stageName?: string | string[];
    /**
     * Filters for conversations with any of the provided tags.
     */
    tags?: string | string[];
}
