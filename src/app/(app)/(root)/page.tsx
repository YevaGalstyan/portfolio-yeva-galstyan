import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLink } from "@/components/ui/github-link";
import { LinkedInLink } from "@/components/ui/linkedin-link";
import { Location } from "@/components/ui/location";
import { ViewCV } from "@/components/view-cv";

const title = "Hi, I am Yeva Galstyan"
const description =
  "A Master's student in Global Software Development at Hochschule Fulda and a working student front-end developer in BASF Ludwigshafen."

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Avatar className="rounded-lg w-40 h-40">
          <AvatarImage src="/profile_img.jpg" />
          <AvatarFallback>YG</AvatarFallback>
        </Avatar>
        <Location />
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