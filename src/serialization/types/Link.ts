/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const Link: core.serialization.ObjectSchema<serializers.Link.Raw, DevRevBeta.Link> = core.serialization
    .object({
        linkType: core.serialization.property(
            "link_type",
            core.serialization.lazy(async () => (await import("..")).LinkType)
        ),
        source: core.serialization.lazy(async () => (await import("..")).LinkEndpointSummary),
        target: core.serialization.lazy(async () => (await import("..")).LinkEndpointSummary),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).AtomBase));

export declare namespace Link {
    interface Raw extends serializers.AtomBase.Raw {
        link_type: serializers.LinkType.Raw;
        source: serializers.LinkEndpointSummary.Raw;
        target: serializers.LinkEndpointSummary.Raw;
    }
}
