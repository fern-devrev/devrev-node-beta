/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const OrgBase: core.serialization.ObjectSchema<serializers.OrgBase.Raw, DevRevBeta.OrgBase> = core.serialization
    .object({
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AtomBase));

export declare namespace OrgBase {
    interface Raw extends serializers.AtomBase.Raw {
        display_name?: string | null;
    }
}
