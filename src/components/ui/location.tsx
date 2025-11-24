import Link from "next/link"
import { MapPin } from "lucide-react"
import { Badge } from "./badge"

interface LocationProps {
    location: string
}

export function Location({ location }: LocationProps) {
    return (
        <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
        </Badge>
    )
}
