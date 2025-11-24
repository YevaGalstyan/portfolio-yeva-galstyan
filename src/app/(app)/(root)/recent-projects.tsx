"use client";

import { useProjectStore } from "@/lib/zustand/useProjectStore";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectOverview } from "@/components/project-overview";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/shadcn-io/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function RecentProjects() {
  const { projects, loading } = useProjectStore();

  const skeletonArray = [1, 2, 3 ];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-primary leading-tighter max-w-2xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-3xl xl:tracking-tighter">
          Recent Projects
        </p>
        <Link href="/projects">
          <Announcement>
            <AnnouncementTitle>
              View All Projects
              <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
            </AnnouncementTitle>
          </Announcement>
        </Link>
      </div>
      <div className="grid gap-8 py-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 xl:gap-6 2xl:gap-8">
        {loading
          ? skeletonArray.map((i) => (
            <div key={i} className="w-full flex flex-col p-4 border border-dashed border-border rounded-lg animate-pulse">
              <Skeleton className="h-48 w-full rounded-lg mb-2" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))
          : projects.slice(0, 3).map((project) => <ProjectOverview key={project.id} project={project} />)}
      </div>
    </div>
  )

}