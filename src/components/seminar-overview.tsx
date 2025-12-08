import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Location } from "./ui/location";
import { LinkIcon, ScrollText } from "lucide-react";
import Link from "next/link"
import { Announcement, AnnouncementTitle } from "./ui/announcement";
import { Seminar } from "@/types/seminar";
import { ExpandableDescription } from "./expandable-description";

interface SeminarCardProps {
    seminar: Seminar;
}

export function SeminarOverview({ seminar }: SeminarCardProps) {
    return (
        <Card className="w-full p-6 border border-dashed rounded-lg gap-3">
            <div className="flex flex-row md:flex-row gap-4">
                {/* LEFT SIDE: IMAGE */}
                {seminar.companyImage && (
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-lg border border-accent p-1 shrink-0">
                        <img
                            src={seminar.companyImage}
                            alt={seminar.companyName}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* RIGHT SIDE: TITLE + META (NO DESCRIPTION ON MOBILE) */}
                <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="flex flex-wrap gap-1 items-center">
                            <span className="text-md font-semibold">{seminar.name}</span>
                            <span className="text-md font-normal">at </span>

                            {seminar.companyLink ? (
                                <Link href={seminar.companyLink} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-1 hover:underline">
                                        <span className="text-md font-normal">{seminar.companyName}</span>
                                        <LinkIcon className="w-4 h-4" />
                                    </div>

                                </Link>
                            ) : (
                                <span className="text-md font-normal">{seminar.companyName}</span>
                            )}
                        </CardTitle>

                        <div className="flex gap-2 flex-wrap">
                            {seminar.location && <Location location={seminar.location} />}
                            <DateRange startDate={seminar.startDate} endDate={seminar.endDate} useDays={seminar.showDates} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    {seminar.description && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground`}
                            >
                                <span dangerouslySetInnerHTML={{ __html: seminar.description }}></span>
                            </CardDescription>
                        </div>
                    )}

                    {seminar.certificate && (
                        <div className="relative hidden md:block mt-1">
                            <Link target="_blank" href={seminar.certificate}>
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
            {seminar.description && (
                <div className="relative mt-1 block md:hidden">
                    <ExpandableDescription description={seminar.description} />
                </div>
            )}

            {seminar.certificate && (
                <div className="relative mt-1 block md:hidden">
                    <Link target="_blank" href={seminar.certificate}>
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
