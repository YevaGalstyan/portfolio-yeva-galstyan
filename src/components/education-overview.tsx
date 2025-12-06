import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Location } from "./ui/location";
import { LinkIcon } from "lucide-react";
import Link from "next/link"
import { Education } from "@/types/education";
import { useState } from "react";
import { CollapsibleList } from "./ui/collapsable-list";

interface EducationCardProps {
    education: Education;
}

export function EducationOverview({ education }: EducationCardProps) {
    const [showCourses, setShowCourses] = useState(false);

    return (
        <Card className="w-full p-6 border border-dashed rounded-lg gap-3">
            <div className="flex flex-row md:flex-row gap-4">
                {/* LEFT SIDE: IMAGE */}
                {education.school_image && (
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-lg border border-accent p-1 shrink-0">
                        <img
                            src={education.school_image}
                            alt={education.school_name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* RIGHT SIDE: TITLE + META (NO DESCRIPTION ON MOBILE) */}
                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="flex flex-wrap gap-1 items-center">
                            <span className="text-md font-semibold">{education.degree}</span>
                            <span className="text-md font-normal">at </span>

                            {education.school_link && (
                                <Link href={education.school_link} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-1 hover:underline">
                                        <span className="text-md font-normal">{education.school_name}</span>
                                        <LinkIcon className="w-4 h-4" />
                                    </div>

                                </Link>
                            )}
                        </CardTitle>

                        <div className="flex gap-2 flex-wrap">
                            {education.location && <Location location={education.location} />}
                            <DateRange startDate={education.startDate} endDate={education.endDate} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    {education.description && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground"
                                    }`}
                            >
                                {education.description}
                            </CardDescription>
                        </div>
                    )}

                    {/* GPA */}
                    {education.GPA && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground"
                                    }`}
                            >
                                <span className="font-semibold">Overall grade: </span>{education.GPA}
                            </CardDescription>
                        </div>
                    )}

                    {education.relevant_courses?.length > 0 && (
                         <div className="relative hidden md:block">
                        <CollapsibleList
                            title="Relevant Courses"
                            items={education.relevant_courses}
                        />
                        </div>
                    )}
                </div>
            </div>

            {/* DESCRIPTION (ONLY UNDER EVERYTHING ON MOBILE, INLINE ON DESKTOP) */}
            {education.description && (
                <div className="relative mt-1 block md:hidden">
                    <CardDescription
                        className={`text-sm text-muted-foreground"
                            }`}
                    >
                        {education.description}
                    </CardDescription>
                </div>
            )}

            {/* GPA (ONLY UNDER EVERYTHING ON MOBILE, INLINE ON DESKTOP) */}
            {education.GPA && (
                <div className="relative block md:hidden">
                    <CardDescription
                        className={`text-sm text-muted-foreground"
                            }`}
                    >
                        <span className="font-semibold">Overall grade: </span> {education.GPA}
                    </CardDescription>
                </div>
            )}


            {education.relevant_courses?.length > 0 && (
                <div className="relative block md:hidden">
                    <CollapsibleList
                        title="Relevant Courses"
                        items={education.relevant_courses}
                    />
                </div>
            )}
        </Card>
    );
}
