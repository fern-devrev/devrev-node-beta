/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export type LinkEndpointSummary =
    | DevRevBeta.LinkEndpointSummary.Capability
    | DevRevBeta.LinkEndpointSummary.Conversation
    | DevRevBeta.LinkEndpointSummary.Enhancement
    | DevRevBeta.LinkEndpointSummary.Feature
    | DevRevBeta.LinkEndpointSummary.Issue
    | DevRevBeta.LinkEndpointSummary.Product
    | DevRevBeta.LinkEndpointSummary.Ticket;

export declare namespace LinkEndpointSummary {
    interface Capability extends DevRevBeta.PartBaseSummary {
        type: "capability";
    }

    interface Conversation extends DevRevBeta.ConversationSummary {
        type: "conversation";
    }

    interface Enhancement extends DevRevBeta.PartBaseSummary {
        type: "enhancement";
    }

    interface Feature extends DevRevBeta.PartBaseSummary {
        type: "feature";
    }

    interface Issue extends DevRevBeta.IssueSummary {
        type: "issue";
    }

    interface Product extends DevRevBeta.PartBaseSummary {
        type: "product";
    }

    interface Ticket extends DevRevBeta.TicketSummary {
        type: "ticket";
    }
}
