import Link from "next/link";
import { Check } from "lucide-react";

import { SectionIntro } from "@/app/_components/landing/section-intro";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    audience: "For getting started",
    cta: "Get Started",
    highlighted: false,
    features: [
      "Track your applications",
      "Set reminders",
      "View basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    audience: "For serious job seekers",
    cta: "Start Pro Trial",
    highlighted: true,
    features: ["Advanced analytics", "Priority reminders", "Export data"],
  },
  {
    name: "Premium",
    price: "$19",
    audience: "For career champions",
    cta: "Go Premium",
    highlighted: false,
    features: ["Premium insights", "Personalized tips", "Priority support"],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8 lg:py-24"
    >
      <SectionIntro
        eyebrow="Simple & Transparent"
        title="Choose the Perfect Plan"
        description="Start free and upgrade anytime."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative flex flex-col p-6",
              plan.highlighted && "border-primary bg-primary text-background shadow-lg",
            )}
          >
            {plan.highlighted ? (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-foreground">
                Most Popular
              </Badge>
            ) : null}
            <p className="text-sm font-medium">{plan.name}</p>
            <p
              className={cn(
                "mt-1 text-sm",
                plan.highlighted ? "text-background/80" : "text-muted",
              )}
            >
              {plan.audience}
            </p>
            <p className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span
                className={cn(
                  "mb-1 text-sm",
                  plan.highlighted ? "text-background/80" : "text-muted",
                )}
              >
                / month
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check
                    className={cn(
                      "size-4 shrink-0",
                      plan.highlighted ? "text-background" : "text-primary",
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={cn(
                "mt-8 w-full",
                plan.highlighted &&
                  "border-transparent bg-background text-foreground hover:bg-secondary",
              )}
              variant="outline"
              asChild
            >
              <Link href="/dashboard">{plan.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
