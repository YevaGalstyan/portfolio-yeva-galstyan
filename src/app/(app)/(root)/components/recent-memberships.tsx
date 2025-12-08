"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Announcement, AnnouncementTitle } from "@/components/ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { TrainingOverview } from "@/components/training-overview";
import { useMembershipStore } from "@/lib/zustand/useMembershiStore";
import { MembershipOverview } from "@/components/membership-overview";

export default function RecentMemberships() {
    const { membership, loading } = useMembershipStore();

    const skeletonArray = [1];
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <p className="text-primary leading-tighter max-w-2xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-3xl xl:tracking-tighter">
                    Memberships
                </p>
                <Link href="/education">
                    <Announcement>
                        <AnnouncementTitle>
                            View All Memberships
                            <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
                        </AnnouncementTitle>
                    </Announcement>
                </Link>
            </div>
            <div className="container-wrapper section-soft pb-6 flex flex-col gap-3">
                {loading}
                {loading
                    ? skeletonArray.map((i) => (
                        <div key={i} className="w-full flex flex-col p-4 border border-border rounded-lg animate-pulse">
                            <Skeleton className="h-48 w-full rounded-lg mb-2" />
                            <Skeleton className="h-6 w-3/4 mb-2" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    ))
                    : membership.splice(0,1).map((mem) => <MembershipOverview key={mem.id} membership={mem} />)}
            </div>
        </div>
    )

}