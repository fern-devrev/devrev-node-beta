/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const OrgSummary: core.serialization.Schema<serializers.OrgSummary.Raw, DevRevBeta.OrgSummary> =
    core.serialization
        .union("type", {
            rev_org: core.serialization.lazyObject(async () => (await import("..")).OrgBaseSummary),
        })
        .transform<DevRevBeta.OrgSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace OrgSummary {
    type Raw = OrgSummary.RevOrg;

    interface RevOrg extends serializers.OrgBaseSummary.Raw {
        type: "rev_org";
    }
}
