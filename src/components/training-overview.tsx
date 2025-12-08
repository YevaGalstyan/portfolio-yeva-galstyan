import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Location } from "./ui/location";
import { ArrowUpRightIcon, LinkIcon, ScrollText } from "lucide-react";
import Link from "next/link"
import { CollapsibleList } from "./ui/collapsable-list";
import { Training } from "@/types/training";
import { TechStackBadges } from "./ui/tech-stack";
import { Announcement, AnnouncementTitle } from "./ui/announcement";

interface TrainingCardProps {
    training: Training;
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
                            <DateRange startDate={training.startDate} endDate={training.endDate} useDays={training.showDates} />
                        </div>
                    </div>

                    {training.techStack && <TechStackBadges techStack={training.techStack} />}

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

                    {training.certificate && (
                        <div className="relative hidden md:block">
                            <Link target="_blank" href={training.certificate}>
                                <Announcement>
                                    <AnnouncementTitle className="cursor-pointer">
                                        <ScrollText className="shrink-0 text-muted-foreground" size={16} />
                                        Certificate
                                    </AnnouncementTitle>
                                </Announcement>
                            </Link>
                        </div>
                    )}
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

            {training.certificate && (
                <div className="relative mt-1 block md:hidden">
                    <Link target="_blank" href={training.certificate}>
                        <Announcement>
                            <AnnouncementTitle className="cursor-pointer">
                                <ScrollText className="shrink-0 text-muted-foreground" size={16} />
                                Certificate
                            </AnnouncementTitle>
                        </Announcement>
                    </Link>
                </div>
            )}
        </Card>
    );
}
