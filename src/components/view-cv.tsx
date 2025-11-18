"use client"
import { siteConfig } from "@/lib/siteconfig"
import { Button } from "./ui/button"
import { FileUser } from "lucide-react"

export function ViewCV() {
  return (
    <Button
      asChild
      variant="secondary"
      size="sm"
      className="cursor-pointer h-8 shadow-none md:h-7 md:text-[0.8rem]"
    >
      <a
        href={siteConfig.links.cv}
        target="_blank"
        rel="noopener noreferrer"
        download={'Yeva_Galstyan_CV.pdf'}>
        <FileUser className="mr-1 w-4 h-4" />
        Download CV
      </a>
    </Button>
  )
}
