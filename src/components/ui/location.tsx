import Link from "next/link"
import { MapPin } from "lucide-react"
import { Badge } from "./badge"


export function Location() {
    return (
        <Badge variant="outline">
            Fulda, Germany
            <MapPin />
        </Badge>
    )
}
