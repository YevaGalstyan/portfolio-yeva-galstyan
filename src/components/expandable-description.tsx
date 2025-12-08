import { useState } from "react";
import { CardDescription } from "./ui/card";

export function ExpandableDescription({ description }: { description: string }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <CardDescription
                className={`text-sm text-muted-foreground ${!expanded ? "line-clamp-2" : ""}`}
            >
                <span dangerouslySetInnerHTML={{ __html: description }}></span>
            </CardDescription>
            <button
                className="text-sm mt-1 underline cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Read less" : "Read more"}
            </button>
        </>
    )
}