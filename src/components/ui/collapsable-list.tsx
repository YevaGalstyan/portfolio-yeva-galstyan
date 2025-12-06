import { useState } from "react";
import { CardDescription } from "./card";

interface CollapsibleListProps {
    title: string;
    items: string[];
}

export function CollapsibleList({ title, items }: CollapsibleListProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!items || items.length === 0) return null;

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm text-primary underline"
            >
                {isOpen ? `Hide ${title}` : `Show ${title}`}
            </button>

            <div
                className={`transition-all overflow-hidden duration-300 ease-in-out ${isOpen ? "max-h-96 mt-2" : "max-h-0"
                    }`}
            >
                <CardDescription className="text-sm text-muted-foreground space-y-1">
                    <ul className="list-disc list-inside">
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        ))}
                    </ul>
                </CardDescription>
            </div>
        </div>
    );
}
