import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  datetime: string;
  status: "completed" | "upcoming";
};

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative">
      {/* Vertical line */}
      <span
        className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-0.5 bg-border"
        aria-hidden
      />
      {items.map((item) => {
        const isCompleted = item.status === "completed";
        return (
          <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
            <span
              className={cn(
                "relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-white",
                isCompleted ? "bg-success" : "bg-primary",
              )}
            >
              {isCompleted ? (
                <Check className="size-3.5" />
              ) : (
                <span className="size-2 rounded-full bg-background" />
              )}
            </span>
            <div className="pt-0.5">
              <p className="text-sm font-medium">
                <span className="text-muted">{item.datetime}</span>{" "}
                <span className="text-foreground">— {item.title}</span>{" "}
                <span
                  className={cn(
                    "font-medium",
                    isCompleted ? "text-success" : "text-primary",
                  )}
                >
                  ({item.status === "completed" ? "Completed" : "Upcoming"})
                </span>
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
