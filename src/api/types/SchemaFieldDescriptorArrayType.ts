/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRevBeta from "..";

export type SchemaFieldDescriptorArrayType =
    | DevRevBeta.SchemaFieldDescriptorArrayType.Bool
    | DevRevBeta.SchemaFieldDescriptorArrayType.Composite
    | DevRevBeta.SchemaFieldDescriptorArrayType.Double
    | DevRevBeta.SchemaFieldDescriptorArrayType.Enum
    | DevRevBeta.SchemaFieldDescriptorArrayType.Id
    | DevRevBeta.SchemaFieldDescriptorArrayType.Int
    | DevRevBeta.SchemaFieldDescriptorArrayType.RichText
    | DevRevBeta.SchemaFieldDescriptorArrayType.Text
    | DevRevBeta.SchemaFieldDescriptorArrayType.Timestamp
    | DevRevBeta.SchemaFieldDescriptorArrayType.Tokens;

export declare namespace SchemaFieldDescriptorArrayType {
    interface Bool extends DevRevBeta.SchemaBoolListFieldDescriptor, _Base {
        type: "bool";
    }

    interface Composite extends DevRevBeta.SchemaCompositeListFieldDescriptor, _Base {
        type: "composite";
    }

    interface Double extends DevRevBeta.SchemaDoubleListFieldDescriptor, _Base {
        type: "double";
    }

    interface Enum extends DevRevBeta.SchemaEnumListFieldDescriptor, _Base {
        type: "enum";
    }

    interface Id extends DevRevBeta.SchemaIdListFieldDescriptor, _Base {
        type: "id";
    }

    interface Int extends DevRevBeta.SchemaIntListFieldDescriptor, _Base {
        type: "int";
    }

    interface RichText extends DevRevBeta.SchemaRichTextListFieldDescriptor, _Base {
        type: "rich_text";
    }

    interface Text extends DevRevBeta.SchemaTextListFieldDescriptor, _Base {
        type: "text";
    }

    interface Timestamp extends DevRevBeta.SchemaTimestampListFieldDescriptor, _Base {
        type: "timestamp";
    }

    interface Tokens extends DevRevBeta.SchemaTokensListFieldDescriptor, _Base {
        type: "tokens";
    }

    interface _Base {
        /** The maximum array length. */
        maxItems?: number;
        /** The minimum array length. */
        minItems?: number;
    }
}
