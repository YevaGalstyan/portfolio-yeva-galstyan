"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { NavItem } from "@/lib/siteconfig"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ChevronDown } from "lucide-react"
import path from "path"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: NavItem[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-2", className)} {...props}>
      {items.map((item, index) => {
        const hasChildren = item.children && "children" in item && item.children?.length > 0
        const isActive =
          pathname === item.href ||
          (hasChildren && item.children?.some((child) => pathname.startsWith(child.href)))
        return (
          <div key={index}>
            {hasChildren ? (
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    asChild
                    className={cn(
                      "transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "text-muted-foreground hover:text-foreground"
                    )} size="sm">
                    <div>
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-full p-2">
                  <div className="flex flex-col gap-1">
                    {item.children?.map((child, childIndex) => {
                      const isActiveChild = pathname === child.href;
                      return (
                        <Link
                          href={child.href}
                        >
                          <div key={childIndex}
                            className={cn(
                              "transition-colors flex flex-col gap-0.5 p-2 rounded-md",
                              isActiveChild
                                ? "bg-amber-100"
                                : "hover:bg-accent"
                            )}>
                            <span className="text-sm font-medium">{child.label}</span>
                            <span className="text-sm text-muted-foreground">{child.description}</span>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button
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
            )}
          </div>
        )
      })}
    </nav>
  )
}
