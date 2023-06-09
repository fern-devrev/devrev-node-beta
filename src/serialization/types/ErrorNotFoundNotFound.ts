/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const ErrorNotFoundNotFound: core.serialization.Schema<
    serializers.ErrorNotFoundNotFound.Raw,
    DevRevBeta.ErrorNotFoundNotFound
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ErrorNotFoundNotFound {
    type Raw = Record<string, unknown>;
}
