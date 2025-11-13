"use client"
import { Button } from "./ui/button"
import { FileUser } from "lucide-react"

interface ReviewCVProps {
  pdfUrl: string
}

export function ViewCV({ pdfUrl }: ReviewCVProps) {

  return (
    <Button
      asChild
      variant="secondary"
      size="sm"
      className="cursor-pointer h-8 shadow-none md:h-7 md:text-[0.8rem]"
    >
      <a href={pdfUrl} download={'Yeva_Galstyan_CV.pdf'}>
        <FileUser className="mr-1 w-4 h-4" />
        Download CV
      </a>
    </Button>
  )
}
