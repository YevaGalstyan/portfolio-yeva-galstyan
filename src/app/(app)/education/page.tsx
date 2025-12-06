"use client";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import educationConfig from "./education-config";
import { useEducationStore } from "@/lib/zustand/useEducationStore";
import { Skeleton } from "@/components/ui/skeleton";
import { EducationOverview } from "@/components/education-overview";
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { BadgeCheckIcon, Bookmark, BookMarked, ChevronRightIcon } from "lucide-react";

export default function HomePage() {
  const skeletonArray = [1, 2, 3];

  const { education, loading } = useEducationStore();

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="py-0">
        <Avatar className="rounded-lg w-40 h-40">
          <AvatarImage src={educationConfig.homeImage} />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <PageHeaderHeading className="max-w-4xl">{educationConfig.title}</PageHeaderHeading>
        <PageHeaderDescription>{educationConfig.description}</PageHeaderDescription>
      </PageHeader>

      <div className="w-11/12 md:w-3/4 lg:w-3/4 mx-auto">
        <div className="container-wrapper section-soft pb-6 gap-3 flex flex-col">
          <Item variant="muted" size="sm" asChild>
            <a href="#">
              <ItemMedia>
                <BookMarked className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="font-normal">All Grades are in German Grading System</ItemTitle>
              </ItemContent>
            </a>
          </Item>
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
              : education.map((exp) => <EducationOverview key={exp.id} education={exp} />)}
          </div>
        </div>
      </div>
    </div>
  );
}