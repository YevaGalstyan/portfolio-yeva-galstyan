"use client";

import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';

interface ProjectDateRangeProps {
  startDate: string | Date;
  endDate?: string | Date | null;
  useDays?: boolean;
}

export function DateRange({ startDate, endDate, useDays }: ProjectDateRangeProps) {
  const formatMonthYear = (date: string | Date) => {
    const d = typeof date === "string" ? new Date(date) : date;
    if(useDays) {
      return d.toLocaleDateString("default", { day: "numeric", month: "short", year: "numeric" });
    }
    return d.toLocaleDateString("default", { month: "short", year: "numeric" });
  };

  return (
    <div className="flex gap-2 items-center">
      <Badge variant="default" className="px-2 py-1 text-xs">
        <Calendar className="" />
        {formatMonthYear(startDate)}
        <span className="text-xs text-muted-foreground">→</span>
        {endDate ? formatMonthYear(endDate) : "Present"}
      </Badge>
    </div>
  );
}
