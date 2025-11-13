"use client" 

import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { MailPlus } from "lucide-react"
import { useState } from "react"

const email = "eva.gal0908@gmail.com"

export function ContactForm() {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex w-full max-w-lg flex-col gap-6 py-2">
            <Item variant="outline">
                <ItemMedia variant="icon">
                    <MailPlus />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Connect via Email</ItemTitle>
                    <ItemDescription className="text-left">
                        <a href={`mailto:${email}`} >
                            {email}
                        </a>
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button size="sm" variant="outline" onClick={handleCopy}>
                        {copied ? "Copied!" : "Copy"}
                    </Button>
                </ItemActions>
            </Item>
        </div>
    )
}
