import { TechStackCategory } from "@/types/techStack";

export const categoryOrder = [
    TechStackCategory.language,
    TechStackCategory.framework,
    TechStackCategory.state,
    TechStackCategory.styling,
    TechStackCategory.build,
    TechStackCategory.devtools,
    TechStackCategory.design,
    TechStackCategory.data,
    TechStackCategory.maps,
    TechStackCategory.http,
] as const;

export const categoryFilterOptions = [
    "Languages",
    "Frontend",
    "UI/UX",
    "Tools",
] as const;

export function mapCategoryToFilter(category: TechStackCategory): typeof categoryFilterOptions[number] {
    switch (category) {
        case TechStackCategory.language:
            return "Languages";

        case TechStackCategory.framework:
        case TechStackCategory.http:
        case TechStackCategory.state:
        case TechStackCategory.build:
            return "Frontend";

        case TechStackCategory.design:
        case TechStackCategory.styling:
            return "UI/UX";

        case TechStackCategory.devtools:
            return "Tools";

        default:
            return "Frontend";
    }
}
