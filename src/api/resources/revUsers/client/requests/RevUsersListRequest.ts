/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "../../../..";

export interface RevUsersListRequest {
    /**
     * Filters for Rev users that were created by the specified user(s).
     *
     */
    createdBy?: string | string[];
    /**
     * Filters for objects created after the provided timestamp (inclusive).
     *
     */
    createdDateAfter?: string;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     *
     */
    createdDateBefore?: string;
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * List of emails of Rev users to be filtered.
     */
    email?: string | string[];
    /**
     * List of external refs to filter Rev users for.
     */
    externalRef?: string | string[];
    /**
     * The maximum number of Rev users to return. The default is '50'.
     *
     */
    limit?: number;
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     *
     */
    mode?: DevRevBeta.ListMode;
    /**
     * Filters for objects created after the provided timestamp (inclusive).
     *
     */
    modifiedDateAfter?: string;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     *
     */
    modifiedDateBefore?: string;
    /**
     * List of IDs of Rev organizations to be filtered.
     */
    revOrg?: string | string[];
    /**
     * Fields to sort the Rev users by and the direction to sort them.
     *
     */
    sortBy?: string | string[];
}
