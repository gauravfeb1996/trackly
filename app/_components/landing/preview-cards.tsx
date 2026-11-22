import {
  Briefcase,
  Heart,
  LayoutDashboard,
  PieChart,
  Settings,
} from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import { Card } from "@/app/_components/ui/card";

const heroStats = [
  { value: "12", label: "Applications" },
  { value: "12", label: "In Review" },
  { value: "4", label: "Interviews" },
  { value: "1", label: "Offers" },
];

const bars = [
  { day: "Mon", height: "h-8", tone: "bg-primary/30" },
  { day: "Tue", height: "h-14", tone: "bg-primary/50" },
  { day: "Wed", height: "h-10", tone: "bg-primary/40" },
  { day: "Thu", height: "h-24", tone: "bg-primary" },
  { day: "Fri", height: "h-12", tone: "bg-primary/60" },
  { day: "Sat", height: "h-20", tone: "bg-primary/80" },
  { day: "Sun", height: "h-16", tone: "bg-primary/45" },
];

const dashboardStats = [
  { value: "28", label: "Applications", delta: "+12%" },
  { value: "8", label: "Interviews", delta: "+20%" },
  { value: "3", label: "Offers", delta: "+50%" },
  { value: "2", label: "Hired", delta: "+100%" },
];

const funnel = [
  { label: "Applied", value: "28", width: "w-full", tone: "bg-primary" },
  { label: "Interview", value: "8", width: "w-4/5", tone: "bg-primary/80" },
  { label: "Offer", value: "3", width: "w-3/5", tone: "bg-primary/60" },
  { label: "Hired", value: "2", width: "w-2/5", tone: "bg-primary/40" },
];

const weekly = [32, 48, 40, 70, 88];

function MockSidebar() {
  const items = [
    { icon: LayoutDashboard, active: true },
    { icon: Briefcase, active: false },
    { icon: PieChart, active: false },
    { icon: Settings, active: false },
  ];

  return (
    <div className="hidden w-12 shrink-0 flex-col items-center gap-3 border-r border-foreground/10 py-4 sm:flex">
      <span className="size-2.5 rotate-45 rounded-sm bg-primary" />
      {items.map((item) => (
        <span
          key={item.icon.displayName}
          className={
            item.active
              ? "grid size-8 place-items-center rounded-xl bg-secondary text-primary"
              : "grid size-8 place-items-center text-muted"
          }
        >
          <item.icon className="size-4" />
        </span>
      ))}
    </div>
  );
}

export function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl pt-8 lg:max-w-none">
      <div className="absolute right-4 top-0 z-10 w-40 rounded-2xl border border-foreground/10 bg-background p-3 shadow-lg">
        <Heart className="absolute -right-2 -top-2 size-4 fill-primary text-primary" />
        <p className="text-sm font-semibold leading-tight">Stay organized</p>
        <p className="mt-1 text-xs text-muted">Achieve your goals</p>
      </div>
      <svg
        viewBox="0 0 80 48"
        className="absolute right-36 top-6 hidden h-12 w-16 text-primary sm:block"
        aria-hidden
      >
        <path
          d="M4 8c24 0 28 28 70 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M62 28l12 8-2-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Card className="overflow-hidden shadow-2xl sm:rotate-2">
        <div className="flex">
          <MockSidebar />
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="mt-4 text-sm font-semibold">Good morning, Gaurav</p>
              <div className="hidden rounded-full bg-secondary px-3 py-1 text-xs text-muted sm:block">
                Search jobs, companies...
              </div>
            </div>

            <p className="mt-1 text-xs text-muted">
              Here&apos;s your job search progress this week.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-secondary px-3 py-2"
                >
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-medium">Application Activity</p>
              <p className="text-xs text-muted">This Week</p>
            </div>
            <div className="mt-3 flex items-end gap-2">
              {bars.map((bar) => (
                <div
                  key={bar.day}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex h-24 w-full items-end">
                    <div
                      className={`w-full rounded-t-lg ${bar.height} ${bar.tone}`}
                    />
                  </div>
                  <span className="text-xs text-muted">{bar.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function WeeklyActivity() {
  const width = 240;
  const height = 96;
  const max = 100;
  const step = width / (weekly.length - 1);
  const coords = weekly.map((point, index) => {
    const x = index * step;
    const y = height - (point / max) * (height - 8) - 4;
    return { x, y };
  });
  const line = coords.map((point) => `${point.x},${point.y}`).join(" ");
  const area = `0,${height} ${line} ${width},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-28 w-full text-primary"
    >
      <polygon points={area} className="fill-primary/15" />
      <polyline
        points={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {coords.map((point) => (
        <circle
          key={`${point.x}-${point.y}`}
          cx={point.x}
          cy={point.y}
          r="3.5"
          className="fill-background stroke-primary"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

export function DashboardPreview() {
  return (
    <div className="relative">
      <Card className="overflow-hidden shadow-xl">
        <div className="flex">
          <MockSidebar />
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">Dashboard</p>
              </div>
              <Badge variant="outline">Last 3 Months</Badge>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {dashboardStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-foreground/10 px-3 py-2"
                >
                  <p className="text-xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                  <p className="text-xs font-medium text-primary">
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Application Funnel</p>
                <div className="mt-3 space-y-2">
                  {funnel.map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className="flex h-7 flex-1 justify-center">
                        <div
                          className={`h-full rounded-md ${step.width} ${step.tone}`}
                        />
                      </div>
                      <p className="w-16 text-xs">
                        <span className="block text-muted">{step.label}</span>
                        <span className="font-semibold">{step.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Weekly Activity</p>
                <WeeklyActivity />
                <div className="mt-1 flex justify-between text-xs text-muted">
                  {["W1", "W2", "W3", "W4", "W5"].map((week) => (
                    <span key={week}>{week}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
