import {
  ActivityChart,
  StatCard,
} from "@/app/_components/dashboard/dashboard-charts";
import { ApplicationsList } from "@/app/_components/dashboard/applications-list";
import { InterviewsList } from "@/app/_components/dashboard/interviews-list";
import { TopBar } from "@/app/_components/dashboard/top-bar";
import { Select } from "@/app/_components/ui/select";
import { Suspense } from "react";

const stats = [
  {
    icon: "briefcase",
    value: "12",
    label: "Applications",
    delta: "+2",
    trend: "up" as const,
    sparkline: [2, 4, 3, 5, 4, 6, 5],
  },
  {
    icon: "calendar-days",
    value: "4",
    label: "Interviews",
    delta: "+1",
    trend: "up" as const,
    sparkline: [1, 2, 1, 3, 2, 4, 3],
  },
  {
    icon: "trophy",
    value: "1",
    label: "Offers",
    delta: "0",
    trend: "flat" as const,
    sparkline: [1, 1, 1, 1, 1, 1, 1],
  },
];

const activity = [
  { day: "Mon", date: "Nov 10", value: 3 },
  { day: "Tue", date: "Nov 11", value: 2 },
  { day: "Wed", date: "Nov 12", value: 5 },
  { day: "Thu", date: "Nov 13", value: 3 },
  { day: "Fri", date: "Nov 14", value: 5 },
  { day: "Sat", date: "Nov 15", value: 2 },
  { day: "Sun", date: "Nov 16", value: 2 },
];

const interviews = [
  {
    company: "Google",
    role: "Senior Frontend Engineer",
    date: "Nov 18, 2026",
    time: "10:00 AM",
    type: "Technical",
    initials: "G",
    accent: "bg-red-500",
  },
  {
    company: "Stripe",
    role: "Frontend Engineer",
    date: "Nov 20, 2026",
    time: "2:00 PM",
    type: "Hiring Manager",
    initials: "S",
    accent: "bg-indigo-500",
  },
];

const applications = [
  {
    company: "Atlassian",
    role: "Senior Frontend Engineer",
    date: "Nov 16, 2026",
    status: "applied" as const,
    initials: "A",
    accent: "bg-blue-600",
  },
  {
    company: "Linear",
    role: "React Developer",
    date: "Nov 15, 2026",
    status: "in-review" as const,
    initials: "L",
    accent: "bg-slate-800",
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <TopBar />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Good evening, Gaurav! 👋
          </h1>
          <p className="mt-1 text-muted">
            Here&apos;s your job search progress this week.
          </p>
        </div>
        <Select
          options={[
            { value: "week", label: "This Week" },
            { value: "month", label: "This Month" },
            { value: "year", label: "This Year" },
          ]}
          defaultValue="week"
        />
      </div>
      <Suspense>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Suspense>

      <Suspense>
        <ActivityChart data={activity} />
      </Suspense>

      <div className="grid gap-4 lg:grid-cols-2">
        <Suspense>
          <InterviewsList interviews={interviews} />
        </Suspense>
        <Suspense>
          <ApplicationsList applications={applications} />
        </Suspense>
      </div>
    </div>
  );
}
