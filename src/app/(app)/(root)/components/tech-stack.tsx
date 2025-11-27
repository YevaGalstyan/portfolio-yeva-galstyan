"use client";

import { Filter } from "@/components/ui/filter";
import { TechStackBadges } from "@/components/ui/tech-stack";
import { useTechStackStore } from "@/lib/zustand/useTechStack";
import { TechStackCategory, TechStackEnum } from "@/types/techStack";
import { useState } from "react";
import { categoryFilterOptions, categoryOrder, mapCategoryToFilter } from "./techStackConfig";

export default function TechStack() {

    const { techStack, loading } = useTechStackStore();
    const [selectedCategory, setSelectedCategory] = useState<typeof categoryFilterOptions[number] | null>(null);

    const filteredTechStack = techStack?.filter((tech) =>
        !selectedCategory || mapCategoryToFilter(tech.category) === selectedCategory
    );

    const sortedTechStack = filteredTechStack?.sort((a, b) => {
        const categoryDiff =
            categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        if (categoryDiff !== 0) return categoryDiff;
        return a.name.localeCompare(b.name);
    });

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <p className="text-primary leading-tighter max-w-2xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-3xl xl:tracking-tighter">
                    My Tech Stack
                </p>

                <Filter
                    items={categoryFilterOptions}
                    selected={selectedCategory}
                    onChange={setSelectedCategory}
                />
            </div>
            <div className="container-wrapper section-soft pb-6">
                <div className="flex flex-col flex-1 gap-3">
                    <TechStackBadges
                        iconItemClassName="p-6 bg-accent rounded-lg"
                        iconWrapperClassName="flex flex-wrap items-center gap-6"
                        techStack={sortedTechStack}
                        addSeparators={false} />
                </div>
            </div>
        </div>
    )

}