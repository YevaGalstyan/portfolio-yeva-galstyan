import va from "@vercel/analytics"
import { z } from "zod"

const eventSchema = z.object({
    name: z.enum([
        "download_cv",
        "copy_email",
        "click_github",
        "click_linkedin",
        "search_query",
        "form_submit",
    ]),
    properties: z
        .record(z.string(), z.union([z.string(), z.number(), z.boolean(), z.null()]))
        .optional(),
})

export type Event = z.infer<typeof eventSchema>

export function trackEvent(input: Event): void {
    const event = eventSchema.parse(input)
    if (event) {
        va.track(event.name, event.properties)
    }
}
