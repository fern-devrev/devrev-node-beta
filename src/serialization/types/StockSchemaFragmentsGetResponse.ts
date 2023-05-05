/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const StockSchemaFragmentsGetResponse: core.serialization.ObjectSchema<
    serializers.StockSchemaFragmentsGetResponse.Raw,
    DevRevBeta.StockSchemaFragmentsGetResponse
> = core.serialization.object({
    fragment: core.serialization.lazyObject(async () => (await import("..")).StockSchemaFragment),
});

export declare namespace StockSchemaFragmentsGetResponse {
    interface Raw {
        fragment: serializers.StockSchemaFragment.Raw;
    }
}