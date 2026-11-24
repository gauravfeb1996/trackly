import {
  ArrowDown,
  ArrowUp,
  Briefcase,
  CalendarDays,
  Minus,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { ReusableSparkline } from "@/app/_components/ui/reusable-sparkline";
import { Card } from "@/app/_components/ui/card";
import { cn } from "@/lib/utils";

type Trend = "up" | "down" | "flat";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "calendar-days": CalendarDays,
  trophy: Trophy,
};

export function StatCard({
  icon,
  value,
  label,
  delta,
  trend = "flat",
  sparkline,
}: {
  icon: string;
  value: string;
  label: string;
  delta: string;
  trend?: Trend;
  sparkline: number[];
}) {
  const Icon = iconMap[icon] ?? Briefcase;

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
        {/* <ReusableSparkline data={sparkline} width={100} height={48} /> */}
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <span className="text-muted">{label}</span>
            <span
              className={cn(
                "inline-flex items-center gap-0.5 font-medium",
                trend === "up" && "text-success",
                trend === "down" && "text-info",
                trend === "flat" && "text-muted",
              )}
            >
              {trend === "up" && <ArrowUp className="size-3.5" />}
              {trend === "down" && <ArrowDown className="size-3.5" />}
              {trend === "flat" && <Minus className="size-3.5" />}
              {delta}
            </span>
          </div>
        </div>
        <ReusableSparkline data={sparkline} width={140} height={72} />
      </div>
    </Card>
  );
}
