"use client";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import seminarsConfig from "./seminars-config";
import { useSeminarStore } from "@/lib/zustand/useSeminarStore";
import { Skeleton } from "@/components/ui/skeleton";
import { SeminarOverview } from "@/components/seminar-overview";

export default function HomePage() {

  const skeletonArray = [1, 2, 3];
  const { seminar, loading } = useSeminarStore();

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="py-0">
        <Avatar className="rounded-lg w-40 h-40">
          <AvatarImage src={seminarsConfig.homeImage} />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <PageHeaderHeading className="max-w-4xl">{seminarsConfig.title}</PageHeaderHeading>
        <PageHeaderDescription>{seminarsConfig.description}</PageHeaderDescription>
      </PageHeader>

      <div className="w-11/12 md:w-3/4 lg:w-3/4 mx-auto">
        <div className="container-wrapper section-soft pb-6">
          <div className="grid gap-8 py-1 grid-cols-1">
            {loading}
            {loading
              ? skeletonArray.map((i) => (
                <div key={i} className="w-full flex flex-col p-4 border border-border rounded-lg animate-pulse">
                  <Skeleton className="h-48 w-full rounded-lg mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))
              : seminar.map((exp) => <SeminarOverview key={exp.id} seminar={exp} />)}
          </div>
        </div>
      </div>
    </div>
  );
}