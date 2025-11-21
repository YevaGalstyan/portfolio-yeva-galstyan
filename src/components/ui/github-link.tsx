import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/siteconfig"
import { Icons } from "./icons/icons"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export function GitHubLink({link, buttonVariant}: {link?: string, buttonVariant?: "default" | "outline" | "ghost"}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild size="sm" variant={buttonVariant || "ghost"} className="h-8 shadow-none">
          <Link href={link || siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.gitHub />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Link to Github</p>
      </TooltipContent>
    </Tooltip>
  )
}
