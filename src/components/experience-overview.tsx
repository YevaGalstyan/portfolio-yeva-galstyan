import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Experience } from "@/types/experience";
import { Location } from "./ui/location";
import { LinkIcon } from "lucide-react";
import Link from "next/link"
import { TechStackBadges } from "./ui/tech-stack";
import { CollapsibleList } from "./ui/collapsable-list";

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceOverview({ experience }: ExperienceCardProps) {

    return (
        <Card className="w-full p-6 border border-dashed rounded-lg gap-3">
            <div className="flex flex-row md:flex-row gap-4">
                {/* LEFT SIDE: IMAGE */}
                {experience.company_image && (
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-lg border border-accent p-1 shrink-0">
                        <img
                            src={experience.company_image}
                            alt={experience.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* RIGHT SIDE: TITLE + META (NO DESCRIPTION ON MOBILE) */}
                <div className="flex flex-col flex-1 gap-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="flex flex-wrap gap-1 items-center">
                            <span className="text-md font-semibold">{experience.title}</span>
                            <span className="text-md font-normal">at </span>

                            {experience.company_link && (
                                <Link href={experience.company_link} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-1 hover:underline">
                                        <span className="text-md font-normal">{experience.company_title}</span>
                                        <LinkIcon className="w-4 h-4" />
                                    </div>

                                </Link>
                            )}
                        </CardTitle>

                        <div className="flex gap-2 flex-wrap">
                            {experience.location && <Location location={experience.location} />}
                            <DateRange startDate={experience.startDate} endDate={experience.endDate} />
                        </div>
                    </div>
                    {experience.techstack && <TechStackBadges techStack={experience.techstack} />}

                    {experience.description && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground"
                                    }`}
                            >
                                {experience.description}
                            </CardDescription>
                        </div>
                    )}


                    {experience.responsibilities.length > 0 && (
                        <div className="relative hidden md:block">
                            <CollapsibleList
                                title="Responsibilities"
                                items={experience.responsibilities}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* DESCRIPTION (ONLY UNDER EVERYTHING ON MOBILE, INLINE ON DESKTOP) */}
            {experience.description && (
                <div className="relative mt-1 block md:hidden">
                    <CardDescription
                        className={`text-sm text-muted-foreground"
                            }`}
                    >
                        {experience.description}
                    </CardDescription>
                </div>
            )}

            {experience.responsibilities.length > 0 && (
                <div className="relative mt-1 block md:hidden">
                    <CollapsibleList
                        title="Responsibilities"
                        items={experience.responsibilities}
                    />
                </div>
            )}
        </Card>
    );
}
