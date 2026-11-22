import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { DashboardPreview } from "@/app/_components/landing/preview-cards";
import { SectionIntro } from "@/app/_components/landing/section-intro";
import { Button } from "@/app/_components/ui/button";

const points = [
  "Monitor application status in real-time",
  "Analyze your progress with insights",
  "Stay on top with smart reminders",
];

export function DashboardSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <div>
        <SectionIntro
          eyebrow="Powerful Dashboard"
          title="Track Your Job Search Like a Pro"
          description="Get a complete overview of your job search journey — from applications to interviews, all at a glance."
        />
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                <Check className="size-3" />
              </span>
              {point}
            </li>
          ))}
        </ul>
        <Button className="mt-8" asChild>
          <Link href="/dashboard">
            Explore Dashboard
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <DashboardPreview />
    </section>
  );
}
