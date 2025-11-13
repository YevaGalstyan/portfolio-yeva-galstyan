import { ContactForm } from "@/components/contact-form";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLink } from "@/components/ui/github-link";
import { LinkedInLink } from "@/components/ui/linkedin-link";
import { Location } from "@/components/ui/location";
import { ViewCV } from "@/components/view-cv";

const title = "Contact Me"
const description =
  "I am open to project suggestions, eager to engage in tech discussions and forums, and excited to share knowledge. "

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <PageHeaderHeading className="max-w-4xl">
          <div className="flex flex-col items-center gap-1">
            <Avatar className="rounded-lg w-12 h-12">
              <AvatarImage src="/profile_img.jpg" />
              <AvatarFallback>YG</AvatarFallback>
            </Avatar>
            {title}
          </div>

        </PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <ContactForm />
        <PageActions>
          <ViewCV pdfUrl="/cv.pdf" />
          <GitHubLink />
          <LinkedInLink />
        </PageActions>
      </PageHeader>
    </div>
  );
}