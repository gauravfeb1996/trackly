import { CalendarDays, ChartColumn, Trophy, Zap } from "lucide-react";

import { Card } from "@/app/_components/ui/card";

const features = [
  {
    title: "Centralized Tracking",
    description:
      "Keep all applications, interviews and follow-ups in one place.",
    icon: Zap,
  },
  {
    title: "Smart Reminders",
    description: "Never miss an interview or important deadline.",
    icon: CalendarDays,
  },
  {
    title: "Actionable Insights",
    description: "Track your performance with detailed analytics.",
    icon: ChartColumn,
  },
  {
    title: "Reach Your Goals",
    description: "Get hired faster with a focused and organized approach.",
    icon: Trophy,
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      aria-label="Features"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="p-5">
            <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
              <feature.icon className="size-5" />
            </span>
            <h2 className="mt-4 text-base font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
