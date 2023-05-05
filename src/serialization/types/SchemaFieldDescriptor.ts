/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRevBeta from "../../api";
import * as core from "../../core";

export const SchemaFieldDescriptor: core.serialization.Schema<
    serializers.SchemaFieldDescriptor.Raw,
    DevRevBeta.SchemaFieldDescriptor
> = core.serialization
    .union("type", {
        array: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("..")).SchemaFieldDescriptorArrayType),
        }),
        bool: core.serialization.lazyObject(async () => (await import("..")).SchemaBoolFieldDescriptor),
        composite: core.serialization.lazyObject(async () => (await import("..")).SchemaCompositeFieldDescriptor),
        double: core.serialization.lazyObject(async () => (await import("..")).SchemaDoubleFieldDescriptor),
        enum: core.serialization.lazyObject(async () => (await import("..")).SchemaEnumFieldDescriptor),
        id: core.serialization.lazyObject(async () => (await import("..")).SchemaIdFieldDescriptor),
        int: core.serialization.lazyObject(async () => (await import("..")).SchemaIntFieldDescriptor),
        rich_text: core.serialization.lazyObject(async () => (await import("..")).SchemaRichTextFieldDescriptor),
        text: core.serialization.lazyObject(async () => (await import("..")).SchemaTextFieldDescriptor),
        timestamp: core.serialization.lazyObject(async () => (await import("..")).SchemaTimestampFieldDescriptor),
        tokens: core.serialization.lazyObject(async () => (await import("..")).SchemaTokensFieldDescriptor),
    })
    .transform<DevRevBeta.SchemaFieldDescriptor>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace SchemaFieldDescriptor {
    type Raw =
        | SchemaFieldDescriptor.Array
        | SchemaFieldDescriptor.Bool
        | SchemaFieldDescriptor.Composite
        | SchemaFieldDescriptor.Double
        | SchemaFieldDescriptor.Enum
        | SchemaFieldDescriptor.Id
        | SchemaFieldDescriptor.Int
        | SchemaFieldDescriptor.RichText
        | SchemaFieldDescriptor.Text
        | SchemaFieldDescriptor.Timestamp
        | SchemaFieldDescriptor.Tokens;

    interface Array {
        type: "array";
        value: serializers.SchemaFieldDescriptorArrayType.Raw;
    }

    interface Bool extends serializers.SchemaBoolFieldDescriptor.Raw {
        type: "bool";
    }

    interface Composite extends serializers.SchemaCompositeFieldDescriptor.Raw {
        type: "composite";
    }

    interface Double extends serializers.SchemaDoubleFieldDescriptor.Raw {
        type: "double";
    }

    interface Enum extends serializers.SchemaEnumFieldDescriptor.Raw {
        type: "enum";
    }

    interface Id extends serializers.SchemaIdFieldDescriptor.Raw {
        type: "id";
    }

    interface Int extends serializers.SchemaIntFieldDescriptor.Raw {
        type: "int";
    }

    interface RichText extends serializers.SchemaRichTextFieldDescriptor.Raw {
        type: "rich_text";
    }

    interface Text extends serializers.SchemaTextFieldDescriptor.Raw {
        type: "text";
    }

    interface Timestamp extends serializers.SchemaTimestampFieldDescriptor.Raw {
        type: "timestamp";
    }

    interface Tokens extends serializers.SchemaTokensFieldDescriptor.Raw {
        type: "tokens";
    }
}