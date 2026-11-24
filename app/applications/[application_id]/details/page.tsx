import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, User } from "lucide-react";

import { TopBar } from "@/app/_components/dashboard/top-bar";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Stepper, type Step } from "@/app/_components/ui/stepper";
import { Timeline, type TimelineItem } from "@/app/_components/ui/timeline";
import { cn } from "@/lib/utils";

type ApplicationDetails = {
  id: string;
  company: string;
  role: string;
  initials: string;
  accent: string;
  stage: "applied" | "phone-screen" | "technical" | "offer" | "hired";
  stageLabel: string;
  steps: Step[];
  currentStep: number;
  description: string;
  notes: string;
  recruiter: { name: string; role: string; email: string };
  links: { label: string; href: string }[];
  tags: string[];
  timeline: TimelineItem[];
};

const applications: Record<string, ApplicationDetails> = {
  "google-senior-frontend": {
    id: "google-senior-frontend",
    company: "Google",
    role: "Senior Frontend Engineer",
    initials: "G",
    accent: "bg-red-500",
    stage: "applied",
    stageLabel: "Applied",
    currentStep: 2,
    steps: [
      { label: "Applied", subtitle: "Nov 16" },
      { label: "Phone Screen", subtitle: "Nov 17" },
      { label: "Technical Round", subtitle: "Pending" },
      { label: "Offer", subtitle: "" },
      { label: "Hired", subtitle: "" },
    ],
    description:
      "Build scalable web applications using React and TypeScript. Work on products used by billions of users worldwide.",
    notes: "Strong match. Prepare for system design + React deep dive.",
    recruiter: {
      name: "Sarah Johnson",
      role: "Recruiter",
      email: "sarah.johnson@google.com",
    },
    links: [
      { label: "Job Posting", href: "#" },
      { label: "Company Careers", href: "#" },
    ],
    tags: ["Frontend", "React", "TypeScript", "Remote"],
    timeline: [
      {
        title: "Phone Screen",
        datetime: "Nov 17, 2026 10:00 AM",
        status: "completed",
      },
      {
        title: "Technical Round",
        datetime: "Nov 20, 2026 2:00 PM",
        status: "upcoming",
      },
    ],
  },
};

const fallback: ApplicationDetails = applications["google-senior-frontend"];

export default function Page({
  params,
}: {
  params: Promise<{ application_id: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ApplicationDetailsPage params={params} />
    </Suspense>
  );
}

async function ApplicationDetailsPage({
  params,
}: {
  params: Promise<{ application_id: string }>;
}) {
  const { application_id } = await params;
  const app = applications[application_id] ?? fallback;

  return (
    <div className="space-y-6">
      <TopBar />

      <Link
        href="/applications"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to Applications
      </Link>

      {/* Company header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "grid size-14 shrink-0 place-items-center rounded-2xl text-xl font-bold text-white",
              app.accent,
            )}
          >
            {app.initials}
          </span>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {app.company}
            </h1>
            <p className="text-muted">{app.role}</p>
          </div>
        </div>
        <Badge variant="info" className="self-start sm:self-auto">
          {app.stageLabel}
        </Badge>
      </div>

      {/* Stage stepper */}
      <Card className="p-6">
        <Stepper steps={app.steps} currentStep={app.currentStep} />
      </Card>

      {/* Two column layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Job Description & Notes
            </h2>
            <p className="mt-3 text-muted">{app.description}</p>

            <div className="mt-6 flex items-start justify-between gap-4 border-t border-border pt-5">
              <div className="min-w-0">
                <h3 className="font-semibold">My Notes</h3>
                <p className="mt-1 text-muted">{app.notes}</p>
              </div>
              <Button variant="outline" size="sm" className="shrink-0">
                Edit
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Interview Timeline
            </h2>
            <div className="mt-5">
              <Timeline items={app.timeline} />
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Recruiter & Links
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-secondary text-muted">
                  <User className="size-4" />
                </span>
                <div>
                  <p className="font-medium">{app.recruiter.name}</p>
                  <p className="text-sm text-muted">{app.recruiter.role}</p>
                </div>
              </div>

              <a
                href={`mailto:${app.recruiter.email}`}
                className="flex items-center gap-3 text-sm text-primary transition-colors hover:underline"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-secondary text-muted">
                  <Mail className="size-4" />
                </span>
                <span className="flex-1 truncate">{app.recruiter.email}</span>
                <ExternalLink className="size-4 shrink-0" />
              </a>

              <div className="space-y-2 border-t border-border pt-4">
                {app.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 text-sm text-primary transition-colors hover:underline"
                  >
                    <ExternalLink className="size-4 text-muted" />
                    <span>{link.label}</span>
                    <ExternalLink className="ml-auto size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Tags & Info
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
