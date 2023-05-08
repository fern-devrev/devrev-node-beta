/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import * as serializers from "..";
import * as DevRevBeta from "../../api";

const _Base = core.serialization.object({
    deprecated: core.serialization.boolean().optional(),
    description: core.serialization.string(),
    fields: core.serialization
        .list(core.serialization.lazy(async () => (await import("..")).SchemaFieldDescriptor))
        .optional(),
    leafType: core.serialization.property("leaf_type", core.serialization.string()),
});
export const CustomSchemaFragmentsSetRequest: core.serialization.Schema<
    serializers.CustomSchemaFragmentsSetRequest.Raw,
    DevRevBeta.CustomSchemaFragmentsSetRequest
> = core.serialization
    .union("type", {
        app_fragment: core.serialization
            .lazyObject(async () => (await import("..")).CustomSchemaFragmentsSetRequestAppFragment)
            .extend(_Base),
        custom_type_fragment: core.serialization
            .lazyObject(async () => (await import("..")).CustomSchemaFragmentsSetRequestCustomTypeFragment)
            .extend(_Base),
        tenant_fragment: core.serialization
            .object({
                value: core.serialization.lazy(
                    async () => (await import("..")).CustomSchemaFragmentsSetRequestTenantFragment
                ),
            })
            .extend(_Base),
    })
    .transform<DevRevBeta.CustomSchemaFragmentsSetRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace CustomSchemaFragmentsSetRequest {
    type Raw =
        | CustomSchemaFragmentsSetRequest.AppFragment
        | CustomSchemaFragmentsSetRequest.CustomTypeFragment
        | CustomSchemaFragmentsSetRequest.TenantFragment;

    interface AppFragment extends _Base, serializers.CustomSchemaFragmentsSetRequestAppFragment.Raw {
        type: "app_fragment";
    }

    interface CustomTypeFragment extends _Base, serializers.CustomSchemaFragmentsSetRequestCustomTypeFragment.Raw {
        type: "custom_type_fragment";
    }

    interface TenantFragment extends _Base {
        type: "tenant_fragment";
        value: serializers.CustomSchemaFragmentsSetRequestTenantFragment.Raw;
    }

    interface _Base {
        deprecated?: boolean | null;
        description: string;
        fields?: serializers.SchemaFieldDescriptor.Raw[] | null;
        leaf_type: string;
    }
}
