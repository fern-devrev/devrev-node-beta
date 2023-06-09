/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export interface RevUser extends DevRevBeta.UserBase {
    /** Custom schema fragments. */
    customSchemaFragments?: string[];
    /** Description of the Rev user. */
    description?: string;
    /**
     * External ref is a mutable unique identifier for a user within the
     * Rev organization from your primary customer record. If none is
     * available, a good alternative is the email address/phone number
     * which could uniquely identify the user. If none is specified, a
     * system-generated identifier will be assigned to the user.
     *
     */
    externalRef?: string;
    revOrg?: DevRevBeta.OrgSummary;
    /** Stock schema fragment. */
    stockSchemaFragment?: string;
}
