import { Card, CardDescription, CardTitle } from "./ui/card";
import { DateRange } from "./ui/dateRange";
import { Location } from "./ui/location";
import { LinkIcon } from "lucide-react";
import Link from "next/link"
import { ExpandableDescription } from "./expandable-description";
import { Membership } from "@/types/membership";

interface MembershipCardProps {
    membership: Membership;
}

export function MembershipOverview({ membership }: MembershipCardProps) {
    return (
        <Card className="w-full p-6 border border-dashed rounded-lg gap-3">
            <div className="flex flex-row md:flex-row gap-4">
                {/* LEFT SIDE: IMAGE */}
                {membership.companyImage && (
                    <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-lg border border-accent p-1 shrink-0">
                        <img
                            src={membership.companyImage}
                            alt={membership.companyName}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* RIGHT SIDE: TITLE + META (NO DESCRIPTION ON MOBILE) */}
                <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="flex flex-wrap gap-1 items-center">
                            <span className="text-md font-semibold">{membership.name}</span>
                            <span className="text-md font-normal">at </span>

                            {membership.companyLink ? (
                                <Link href={membership.companyLink} target="_blank" rel="noopener noreferrer">
                                    <div className="flex gap-1 hover:underline">
                                        <span className="text-md font-normal">{membership.companyName}</span>
                                        <LinkIcon className="w-4 h-4" />
                                    </div>

                                </Link>
                            ) : (
                                <span className="text-md font-normal">{membership.companyName}</span>
                            )}
                        </CardTitle>

                        <div className="flex gap-2 flex-wrap">
                            {membership.location && <Location location={membership.location} />}
                            <DateRange startDate={membership.startDate} endDate={membership.endDate} />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    {membership.description && (
                        <div className="relative hidden md:block">
                            <CardDescription
                                className={`text-sm text-muted-foreground`}
                            >
                                <span dangerouslySetInnerHTML={{ __html: membership.description }}></span>
                            </CardDescription>
                        </div>
                    )}
                </div>
            </div>

            {/* DESCRIPTION (ONLY UNDER EVERYTHING ON MOBILE, INLINE ON DESKTOP) */}
            {membership.description && (
                <div className="relative mt-1 block md:hidden">
                    <ExpandableDescription description={membership.description} />
                </div>
            )}
        </Card>
    );
}
