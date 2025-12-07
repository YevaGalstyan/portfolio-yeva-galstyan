import { ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator } from "@/components/ui/context-menu";
import { HeartHandshake } from "lucide-react";
import { toast } from "sonner";

export default function ContextMenuItems() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("your.email@example.com");
        toast.custom(() => (
            <div className="bg-linear-to-r from-rose-600 to-rose-500 text-white p-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-1">
                    <HeartHandshake className="h-5 w-5" />
                    <div className="text-sm">Copied to clipboard</div>
                </div>
            </div>
        ))
    };

    return (
        <ContextMenuContent>
            <ContextMenuLabel>Hey there!</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuItem onClick={handleCopyEmail}>
                <HeartHandshake />
                Copy my mail
            </ContextMenuItem>
        </ContextMenuContent>
    )
}