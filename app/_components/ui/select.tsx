"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type SelectOption = {
  value: string;
  label: string;
};

function Select({
  options,
  value,
  defaultValue,
  onChange,
  className,
}: {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-flex", className)}>
      <select
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-10 appearance-none rounded-xl border border-input bg-background pl-3 pr-9 text-sm font-medium text-foreground shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
    </div>
  );
}

export { Select };
