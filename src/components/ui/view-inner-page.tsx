import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/siteconfig"
import { Icons } from "./icons"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"
import { SquareArrowOutUpRight } from "lucide-react"

export function ViewInnerPage({link, buttonVariant}: {link?: string, buttonVariant?: "default" | "outline" | "ghost"}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild size="sm" variant={buttonVariant || "ghost"} className="h-8 shadow-none">
          <Link href={link || siteConfig.links.github} target="_blank" rel="noreferrer">
            <SquareArrowOutUpRight />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>View Details</p>
      </TooltipContent>
    </Tooltip>
  )
}
