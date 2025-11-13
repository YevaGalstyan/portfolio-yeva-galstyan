import Link from "next/link"
import { Button } from "./ui/button"
import { MobileNav } from "./mobile-nav"
import { Icons } from "./ui/icons";
import { siteConfig } from "@/lib/config";
import { MainNav } from "./main-nav";
import { GitHubLink } from "./ui/github-link";
import { Separator } from "./ui/separator";
import { ModeSwitcher } from "./ui/mode-switcher";
import { LinkedInLink } from "./ui/linkedin-link";
import { ViewCV } from "./view-cv";

export function Header() {

    return (
        <header className="bg-background sticky top-0 z-50 w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
            <div className="container-wrapper 3xl:fixed:px-0 px-4">
                <div className="3xl:fixed 3xl:container flex h-18 items-center  **:data-[slot=separator]:!h-4">
                    <MobileNav
                        items={siteConfig.navItems}
                        className="flex lg:hidden"
                    />
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hidden size-12 lg:flex"
                    >
                        <Link href="/">
                            <Icons.logo className="size-6" />
                            <span className="sr-only">{siteConfig.name}</span>
                        </Link>
                    </Button>
                    <MainNav items={siteConfig.navItems} className="hidden lg:flex px-2" />
                    <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                        <ViewCV pdfUrl="/cv.pdf" />
                        <GitHubLink />
                        <LinkedInLink />
                        <Separator orientation="vertical" />
                        <ModeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}
