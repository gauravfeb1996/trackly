import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Plus,
  Search,
} from "lucide-react";

import {
  ApplicationsTable,
  type Application,
} from "@/app/_components/applications/applications-table";
import { TopBar } from "@/app/_components/dashboard/top-bar";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Select } from "@/app/_components/ui/select";
import { cn } from "@/lib/utils";

const applications: Application[] = [
  {
    id: "google-senior-frontend",
    company: "Google",
    role: "Senior Frontend Engineer",
    stage: "applied",
    appliedOn: "Nov 16, 2026",
    status: "active",
    initials: "G",
    accent: "bg-red-500",
  },
  {
    id: "stripe-frontend",
    company: "Stripe",
    role: "Frontend Engineer",
    stage: "interview",
    appliedOn: "Nov 14, 2026",
    status: "active",
    initials: "S",
    accent: "bg-indigo-500",
  },
  {
    id: "atlassian-senior-frontend",
    company: "Atlassian",
    role: "Senior Frontend Engineer",
    stage: "phone-screen",
    appliedOn: "Nov 12, 2026",
    status: "active",
    initials: "A",
    accent: "bg-blue-600",
  },
  {
    id: "linear-react-developer",
    company: "Linear",
    role: "React Developer",
    stage: "applied",
    appliedOn: "Nov 10, 2026",
    status: "active",
    initials: "L",
    accent: "bg-slate-800",
  },
  {
    id: "amazon-frontend",
    company: "Amazon",
    role: "Frontend Engineer",
    stage: "offer",
    appliedOn: "Nov 08, 2026",
    status: "offer",
    initials: "a",
    accent: "bg-amber-500",
  },
  {
    id: "meta-software-engineer",
    company: "Meta",
    role: "Software Engineer",
    stage: "rejected",
    appliedOn: "Nov 05, 2026",
    status: "rejected",
    initials: "M",
    accent: "bg-blue-600",
  },
  {
    id: "microsoft-frontend",
    company: "Microsoft",
    role: "Frontend Engineer",
    stage: "applied",
    appliedOn: "Nov 03, 2026",
    status: "active",
    initials: "M",
    accent: "bg-sky-600",
  },
  {
    id: "zalando-frontend-developer",
    company: "Zalando",
    role: "Frontend Developer",
    stage: "interview",
    appliedOn: "Oct 30, 2026",
    status: "active",
    initials: "Z",
    accent: "bg-orange-500",
  },
];

const pages = [1, 2, 3, 4, 5];

export default function Page() {
  return (
    <div className="space-y-6">
      <TopBar />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Applications
          </h1>
          <p className="mt-1 text-muted">
            Track all your job applications in one place.
          </p>
        </div>
        <Button variant="primary">
          <Plus className="size-4" />
          Add Application
        </Button>
      </div>

      <Card className="p-4">
        {/* Filters */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1 lg:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              placeholder="Search by company or role..."
              className="h-11 pl-10"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Select
              options={[
                { value: "all", label: "All Stages" },
                { value: "applied", label: "Applied" },
                { value: "interview", label: "Interview" },
                { value: "phone-screen", label: "Phone Screen" },
                { value: "offer", label: "Offer" },
                { value: "rejected", label: "Rejected" },
              ]}
              defaultValue="all"
            />
            <Select
              options={[
                { value: "all", label: "All Status" },
                { value: "active", label: "Active" },
                { value: "offer", label: "Offer" },
                { value: "rejected", label: "Rejected" },
              ]}
              defaultValue="all"
            />
            <Select
              options={[
                { value: "3m", label: "Last 3 Months" },
                { value: "1m", label: "Last Month" },
                { value: "6m", label: "Last 6 Months" },
                { value: "1y", label: "Last Year" },
              ]}
              defaultValue="3m"
            />
            <div className="flex items-center rounded-xl border border-input bg-background p-1">
              <button
                type="button"
                className="grid size-8 place-items-center rounded-lg bg-secondary text-primary"
                aria-label="List view"
              >
                <List className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-lg text-muted transition-colors hover:text-foreground"
                aria-label="Grid view"
              >
                <LayoutGrid className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-4">
          <ApplicationsTable data={applications} />
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-muted">Showing 1-8 of 42 applications</p>
          <nav className="flex items-center gap-1">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-lg border border-input text-muted transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Previous page"
            >
              <ChevronLeft className="size-4" />
            </button>
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                className={cn(
                  "grid size-9 place-items-center rounded-lg text-sm font-medium transition-colors",
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "border border-input text-foreground hover:bg-secondary",
                )}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="grid size-9 place-items-center rounded-lg border border-input text-muted transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Next page"
            >
              <ChevronRight className="size-4" />
            </button>
          </nav>
        </div>
      </Card>
    </div>
  );
}
