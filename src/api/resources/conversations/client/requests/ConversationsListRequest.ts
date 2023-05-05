/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "../../../..";

export interface ConversationsListRequest {
    appliesToParts?: string | string[];
    cursor?: string;
    limit?: number;
    members?: string | string[];
    mode?: DevRevBeta.ListMode;
    ownedBy?: string | string[];
    revOrg?: string | string[];
    sourceChannels?: string | string[];
    stageName?: string | string[];
    tags?: string | string[];
}