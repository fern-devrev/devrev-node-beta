/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const RevUser: core.serialization.ObjectSchema<serializers.RevUser.Raw, DevRevBeta.RevUser> = core.serialization
    .object({
        customSchemaFragments: core.serialization.property(
            "custom_schema_fragments",
            core.serialization.list(core.serialization.string()).optional()
        ),
        description: core.serialization.string().optional(),
        externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
        revOrg: core.serialization.property(
            "rev_org",
            core.serialization.lazy(async () => (await import("..")).OrgSummary).optional()
        ),
        stockSchemaFragment: core.serialization.property(
            "stock_schema_fragment",
            core.serialization.string().optional()
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).UserBase));

export declare namespace RevUser {
    interface Raw extends serializers.UserBase.Raw {
        custom_schema_fragments?: string[] | null;
        description?: string | null;
        external_ref?: string | null;
        rev_org?: serializers.OrgSummary.Raw | null;
        stock_schema_fragment?: string | null;
    }
}
