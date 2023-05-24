/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const UserBaseSummary: core.serialization.ObjectSchema<
    serializers.UserBaseSummary.Raw,
    DevRevBeta.UserBaseSummary
> = core.serialization
    .object({
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        displayPicture: core.serialization.property(
            "display_picture",
            core.serialization.lazyObject(async () => (await import("..")).ArtifactSummary).optional()
        ),
        email: core.serialization.string().optional(),
        fullName: core.serialization.property("full_name", core.serialization.string().optional()),
        state: core.serialization.lazy(async () => (await import("..")).UserState).optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AtomBaseSummary));

export declare namespace UserBaseSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {
        display_name?: string | null;
        display_picture?: serializers.ArtifactSummary.Raw | null;
        email?: string | null;
        full_name?: string | null;
        state?: serializers.UserState.Raw | null;
    }
}
