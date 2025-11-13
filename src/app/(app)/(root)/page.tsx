import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLink } from "@/components/ui/github-link";
import { LinkedInLink } from "@/components/ui/linkedin-link";
import { Location } from "@/components/ui/location";
import { Status, StatusIndicator, StatusLabel } from "@/components/ui/status";
import { ViewCV } from "@/components/view-cv";

const title = "Hi, I am Yeva Galstyan"
const description =
  "A Master's student in Global Software Development at Hochschule Fulda and a working student front-end developer in BASF Ludwigshafen."

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Avatar className="rounded-lg w-45 h-45">
          <AvatarImage src="/prof.jpeg" />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Location />
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

        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <ViewCV pdfUrl="/cv.pdf" />
          <GitHubLink />
          <LinkedInLink />
        </PageActions>
      </PageHeader>
    </div>
  );
}