/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export interface Conversation extends DevRevBeta.AtomBase {
    /** Description of the conversation object. */
    description?: string;
    group?: DevRevBeta.GroupSummary;
    /** The latest messages on the conversation. */
    messages?: DevRevBeta.TimelineEntry[];
    /** Owner IDs for the conversation. */
    ownedBy?: DevRevBeta.UserSummary[];
    stage?: DevRevBeta.Stage;
    /** Title of the conversation object. */
    title?: string;
}
