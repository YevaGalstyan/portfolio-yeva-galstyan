import { ContactForm } from "@/components/contact-form";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLink } from "@/components/ui/github-link";
import { LinkedInLink } from "@/components/ui/linkedin-link";
import { Separator } from "@/components/ui/separator";


const title = "Contact Me"
const description =
  "I am open to project suggestions, eager to engage in tech discussions and forums, and excited to share knowledge. "

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <PageHeaderHeading className="max-w-4xl">
          <div className="flex flex-col items-center gap-1">
            <Avatar className="rounded-lg w-40 h-40">
              <AvatarImage src="/contact.jpeg" />
              <AvatarFallback>YG</AvatarFallback>
            </Avatar>
            {title}
          </div>

        </PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <ContactForm />
        <div className="flex items-center">
          <span className="whitespace-nowrap text-neutral-500">or contact me via</span>
          <LinkedInLink />
        </div>
      </PageHeader>
    </div>
  );
}