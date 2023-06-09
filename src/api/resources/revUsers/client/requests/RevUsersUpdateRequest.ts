/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "../../../..";

export interface RevUsersUpdateRequest {
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    customSchemaFragments?: DevRevBeta.RevUsersUpdateRequestCustomSchemaFragments;
    /** Updated description of the Rev user. */
    description?: string;
    /** Updated display name of the Rev user. */
    displayName?: string;
    /** Updated email address of the Rev user. */
    email?: string;
    /** Updated external ref value of the Rev user. */
    externalRef?: string;
    /** The ID of Rev user to update. */
    id: string;
}
