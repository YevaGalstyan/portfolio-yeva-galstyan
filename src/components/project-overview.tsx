import { Project } from "@/types/project";
import { Button } from "./ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle, CardFooter, CardContent } from "./ui/card";
import { GitHubLink } from "./ui/github-link";
import { Badge } from "./ui/badge";
import { DateRange } from "./ui/dateRange";
import { ViewInnerPage } from "./ui/view-inner-page";
import { TechStackBadges } from "./ui/tech-stack";

interface ProjectCardProps {
    project: Project;
}

export function ProjectOverview({ project }: ProjectCardProps) {
    return (
        <Card className="w-full flex flex-col p-4 border border-dashed rounded-lg">
            {/* Card Content */}
            <CardHeader className="flex-1 p-0">
                {project.image && (
                    <div className="w-full aspect-video overflow-hidden rounded-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}
                <div className="flex flex-wrap justify-between items-center pt-4 gap-2">
                    <CardTitle className="text-md font-semibold shrink-0">
                        {project.title}
                    </CardTitle>
                    <DateRange startDate={project.startDate} endDate={project.endDate} />
                </div>
                {project.description && (
                    <CardDescription className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {project.description}
                    </CardDescription>
                )}
                {project.techstack && <TechStackBadges techStack={project.techstack} />}
            </CardHeader>

            {/* Card Footer */}
            <CardFooter className="px-0 flex gap-2 justify-between md::min-h-8 lg:min-h-8 xl:min-h-8">
                {project.githubLink && (
                    <GitHubLink
                        buttonVariant="outline"
                        link={project.githubLink} />
                )}
                {project.hasOverview && (
                    <div className="flex flex-1 justify-end-safe">
                        <ViewInnerPage link={`/projects/${project.id}`} />
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
