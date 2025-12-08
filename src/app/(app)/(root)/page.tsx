import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLink } from "@/components/ui/github-link";
import { LinkedInLink } from "@/components/ui/linkedin-link";
import { Location } from "@/components/ui/location";
import { Status, StatusIndicator, StatusLabel } from "@/components/ui/status";
import { ViewCV } from "@/components/view-cv";
import homeConfig from "./home-config";
import RecentProjects from "./components/recent-projects";
import CurrentPosition from "./components/current-position";
import TechStack from "./components/tech-stack";
import CurrentEducation from "./components/current-education";
import RecentTrainings from "./components/recent-trainings";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Avatar className="rounded-lg w-45 h-45">
          <AvatarImage src={homeConfig.homeImage} />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Location location="Fulda, Germany" />
          </div>

          <div className="flex items-center gap-1">
            <Status status="online">
              <StatusIndicator />
              <StatusLabel>
                <span className="group-[.online]:block">Working from Home</span>
              </StatusLabel>
            </Status>
          </div>
        </div>

        <PageHeaderHeading className="max-w-4xl">{homeConfig.title}</PageHeaderHeading>
        <PageHeaderDescription>{homeConfig.description}</PageHeaderDescription>
        <PageActions>
          <ViewCV />
          <GitHubLink />
          <LinkedInLink />
        </PageActions>
      </PageHeader>

      <div className="w-11/12 md:w-3/4 lg:w-3/4 mx-auto">
        <div className="container-wrapper section-soft pb-6 gap-5">
          <TechStack />
        </div>
        <div className="container-wrapper section-soft pb-6 gap-5">
          <CurrentEducation />
        </div>
        <div className="container-wrapper section-soft pb-6 gap-5">
          <CurrentPosition />
        </div>
        <div className="container-wrapper section-soft pb-6 gap-5">
          <RecentTrainings />
        </div>
        <div className="container-wrapper section-soft pb-6 gap-5">
          <RecentProjects />
        </div>

      </div>
    </div >
  );
}