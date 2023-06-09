/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of link used to define the relationship.
 */
export type LinkType =
    | "developed_with"
    | "imports"
    | "is_dependent_on"
    | "is_duplicate_of"
    | "is_parent_of"
    | "is_part_of"
    | "is_related_to"
    | "serves";

export const LinkType = {
    DevelopedWith: "developed_with",
    Imports: "imports",
    IsDependentOn: "is_dependent_on",
    IsDuplicateOf: "is_duplicate_of",
    IsParentOf: "is_parent_of",
    IsPartOf: "is_part_of",
    IsRelatedTo: "is_related_to",
    Serves: "serves",
} as const;
