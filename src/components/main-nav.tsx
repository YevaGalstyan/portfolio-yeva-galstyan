"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-2", className)} {...props}>
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/")

        return (
          <Button
            key={item.href}
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "transition-colors",
              isActive
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "text-muted-foreground hover:text-foreground"
            )}
            asChild
            size="sm">
            <Link
              href={item.href}
              className={cn(pathname === item.href && "text-primary")}
            >
              {item.label}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
