"use client"
import { trackEvent } from "@/hooks/events"
import { Button } from "./ui/button"
import { FileUser } from "lucide-react"

interface ReviewCVProps {
  pdfUrl: string
}

export function ViewCV({ pdfUrl }: ReviewCVProps) {

   const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent({
      name: "download_cv",
      properties: {
        filename: "Yeva_Galstyan_CV.pdf",
        timestamp: new Date().toISOString(),
      },
    })
  }

  return (
    <Button
      asChild
      variant="secondary"
      size="sm"
      className="cursor-pointer h-8 shadow-none md:h-7 md:text-[0.8rem]"
    >
      <a href={pdfUrl} download={'Yeva_Galstyan_CV.pdf'} onClick={handleDownload}>
        <FileUser className="mr-1 w-4 h-4" />
        Download CV
      </a>
    </Button>
  )
}
