"use client";

import { Badge } from "@/components/ui/badge";

interface FilterProps<T extends string> {
  items: readonly T[];                     // List of categories or options
  selected: T | null;                     // Currently selected item
  onChange: (item: T | null) => void;     // Callback when selection changes
  showAll?: boolean;                       // Optional "All" button
}

export function Filter<T extends string>({
  items,
  selected,
  onChange,
  showAll = true,
}: FilterProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {showAll && (
        <Badge
          variant={selected === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onChange(null)}
        >
          All
        </Badge>
      )}

      {items.map((item) => (
        <Badge
          key={item}
          variant={selected === item ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onChange(selected === item ? null : item)}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}
