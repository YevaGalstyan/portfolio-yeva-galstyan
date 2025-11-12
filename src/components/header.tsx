import Link from "next/link"
import { Button } from "./ui/button"
import { MobileNav } from "./mobile-nav"
import { Icons } from "./ui/icons";
import { siteConfig } from "@/lib/config";
import { MainNav } from "./main-nav";
import { GitHubLink } from "./ui/github-link";
import { Separator } from "./ui/separator";
import { ModeSwitcher } from "./ui/mode-switcher";

export function Header() {

    return (
        <header className="bg-background sticky top-0 z-50 w-full px-16">
            <div className="container-wrapper 3xl:fixed:px-0 px-16">
                <div className="3xl:fixed 3xl:container flex h-18 items-center px-16 **:data-[slot=separator]:!h-4">
                    <MobileNav
                        items={siteConfig.navItems}
                        className="flex lg:hidden"
                    />
                    <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="hidden size-8 lg:flex"
                    >
                    </Button>
                    <Link href="/">
                        <Icons.logo className="size-5" />
                        <span className="sr-only">{siteConfig.name}</span>
                    </Link>
                    <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
                    <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                        <GitHubLink />
                        <Separator orientation="vertical" />
                        <ModeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}
