/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export interface SchemaIntListFieldDescriptor extends DevRevBeta.SchemaFieldDescriptorBase {
    /** Default value. */
    defaultValue?: number[];
    /** The minimum value for the integer (exclusive). */
    gt?: number;
    /** The minimum value for the integer (inclusive). */
    gte?: number;
    /** The maximum value for the integer (exclusive). */
    lt?: number;
    /** The maximum value for the integer (inclusive). */
    lte?: number;
}
