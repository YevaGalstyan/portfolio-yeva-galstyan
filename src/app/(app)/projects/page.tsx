"use client";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import projectConfig from "./projectsConfig";
import { ProjectOverview } from "@/components/project-overview";
import { useEffect } from "react";
import { useProjectStore } from "@/lib/zustand/useProjectStore";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {  
  const { projects, loading } = useProjectStore();

  const skeletonArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="py-0">
        <Avatar className="rounded-lg w-40 h-40">
          <AvatarImage src={projectConfig.homeImage} />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <PageHeaderHeading className="max-w-4xl">{projectConfig.title}</PageHeaderHeading>
        <PageHeaderDescription>{projectConfig.description}</PageHeaderDescription>
      </PageHeader>

      <div className="w-11/12 md:w-3/4 lg:w-3/4 mx-auto">
        <div className="container-wrapper section-soft pb-6">
          <div className="grid gap-8 py-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  xl:gap-6 2xl:gap-8">
            {loading
              ? skeletonArray.map((i) => (
                  <div key={i} className="w-full flex flex-col p-4 border-2 border-dashed border-border rounded-lg animate-pulse">
                    <Skeleton className="h-48 w-full rounded-lg mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))
              : projects.map((project) => <ProjectOverview key={project.id} project={project} /> )}
          </div>
        </div>
      </div>

    </div>
  );
}
