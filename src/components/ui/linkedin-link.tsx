import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Icons } from "./icons"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export function LinkedInLink() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
          <Link href={siteConfig.links.linkedIn} target="_blank" rel="noreferrer">
            <Icons.linkedIn />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Link to LinkedIn</p>
      </TooltipContent>
    </Tooltip>
  )
}
