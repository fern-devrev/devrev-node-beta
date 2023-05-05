/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export interface CustomSchemaFragmentsSetRequestCustomTypeFragment {
    /** List of stock field enum overrides. */
    stockFieldEnumOverrides?: DevRevBeta.StockFieldEnumOverride[];
    /**
     * The string used to populate the subtype in the leaf type.
     *
     */
    subtype: string;
    /** The display name of the subtype. */
    subtypeDisplayName?: string;
}
