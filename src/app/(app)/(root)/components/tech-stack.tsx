"use client";

import { Filter } from "@/components/ui/filter";
import { TechStackBadges } from "@/components/ui/tech-stack";
import { useTechStackStore } from "@/lib/zustand/useTechStack";
import { useState } from "react";
import { categoryFilterOptions, categoryOrder, mapCategoryToFilter } from "./techStackConfig";
import { Skeleton } from "@/components/ui/skeleton";

export default function TechStack() {
    const { techStack, loading } = useTechStackStore();
    const [selectedCategory, setSelectedCategory] = useState<typeof categoryFilterOptions[number] | null>(null);
    const skeletonArray = Array.from({ length: 12 });

    const filteredTechStack = techStack?.filter(
        (tech) => !selectedCategory || mapCategoryToFilter(tech.category) === selectedCategory
    );

    const sortedTechStack = filteredTechStack?.sort((a, b) => {
        const categoryDiff = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        if (categoryDiff !== 0) return categoryDiff;
        return a.name.localeCompare(b.name);
    });

    return (
        <div className="flex flex-col gap-6">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-primary leading-tighter max-w-2xl text-2xl font-semibold tracking-tight lg:text-3xl">
                    My Tech Stack
                </p>

                <Filter
                    items={categoryFilterOptions}
                    selected={selectedCategory}
                    onChange={setSelectedCategory}
                />
            </div>

            {/* Tech Stack Grid */}
            <div className="container-wrapper section-soft pb-6">
                {loading ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {skeletonArray.map((_, i) => (
                            <Skeleton key={i} className="w-full h-24 rounded-lg" />
                        ))}
                    </div>
                ) : (
                    // <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        <TechStackBadges
                            iconItemClassName="p-6 bg-accent rounded-lg w-full flex justify-center items-center"
                            iconWrapperClassName="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-7 xl:grid-cols-10 2xl:grid-cols-13 gap-6"
                            techStack={sortedTechStack}
                            addSeparators={false}
                        />
                    // </div>
                )}
            </div>
        </div>
    );
}
