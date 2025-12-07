import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Location } from "./ui/location";
import { LinkIcon } from "lucide-react";
import Link from "next/link"
import { CollapsibleList } from "./ui/collapsable-list";
import { Trainging } from "@/types/training";

interface TrainingCardProps {
    training: Trainging;
}

export function TrainingOverview({ training }: TrainingCardProps) {
    return (
        <Card className="w-full p-6 border border-dashed rounded-lg gap-3">
            <div className="flex flex-row md:flex-row gap-4">
                {/* LEFT SIDE: IMAGE */}
                {training.companyImage && (
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-lg border border-accent p-1 shrink-0">
                        <img
                            src={training.companyImage}
                            alt={training.companyName}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* RIGHT SIDE: TITLE + META (NO DESCRIPTION ON MOBILE) */}
                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="flex flex-wrap gap-1 items-center">
                            <span className="text-md font-semibold">{training.name}</span>
                            <span className="text-md font-normal">at </span>

                            {training.companyLink ? (
                                <Link href={training.companyLink} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-1 hover:underline">
                                        <span className="text-md font-normal">{training.companyName}</span>
                                        <LinkIcon className="w-4 h-4" />
                                    </div>

                                </Link>
                            ) : (
                                <span className="text-md font-normal">{training.companyName}</span>
                            )}
                        </CardTitle>

                        <div className="flex gap-2 flex-wrap">
                            {training.location && <Location location={training.location} />}
                            <DateRange startDate={training.startDate} endDate={training.endDate} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    {training.description && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground"
                                    }`}
                            >
                                <span dangerouslySetInnerHTML={{ __html: training.description }}></span>
                            </CardDescription>
                        </div>
                    )}

                    {/* {education.relevant_courses?.length > 0 && (
                         <div className="relative hidden md:block">
                        <CollapsibleList
                            title="Relevant Courses"
                            items={education.relevant_courses}
                        />
                        </div>
                    )} */}
                </div>
            </div>

            {/* DESCRIPTION (ONLY UNDER EVERYTHING ON MOBILE, INLINE ON DESKTOP) */}
            {training.description && (
                <div className="relative mt-1 block md:hidden">
                    <CardDescription
                        className={`text-sm text-muted-foreground"
                            }`}
                    >
                        <span dangerouslySetInnerHTML={{ __html: training.description }}></span>
                    </CardDescription>
                </div>
            )}
            {/* 
            {education.relevant_courses?.length > 0 && (
                <div className="relative block md:hidden">
                    <CollapsibleList
                        title="Relevant Courses"
                        items={education.relevant_courses}
                    />
                </div>
            )} */}
        </Card>
    );
}
