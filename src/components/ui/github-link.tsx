import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/siteconfig"
import { Icons } from "./icons"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export function GitHubLink() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
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
