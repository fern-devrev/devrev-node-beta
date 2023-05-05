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
    interface Bool extends DevRevBeta.SchemaBoolListFieldDescriptor {
        type: "bool";
    }

    interface Composite extends DevRevBeta.SchemaCompositeListFieldDescriptor {
        type: "composite";
    }

    interface Double extends DevRevBeta.SchemaDoubleListFieldDescriptor {
        type: "double";
    }

    interface Enum extends DevRevBeta.SchemaEnumListFieldDescriptor {
        type: "enum";
    }

    interface Id extends DevRevBeta.SchemaIdListFieldDescriptor {
        type: "id";
    }

    interface Int extends DevRevBeta.SchemaIntListFieldDescriptor {
        type: "int";
    }

    interface RichText extends DevRevBeta.SchemaRichTextListFieldDescriptor {
        type: "rich_text";
    }

    interface Text extends DevRevBeta.SchemaTextListFieldDescriptor {
        type: "text";
    }

    interface Timestamp extends DevRevBeta.SchemaTimestampListFieldDescriptor {
        type: "timestamp";
    }

    interface Tokens extends DevRevBeta.SchemaTokensListFieldDescriptor {
        type: "tokens";
    }
}