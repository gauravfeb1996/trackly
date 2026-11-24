import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type Step = {
  label: string;
  subtitle: string;
};

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <ol className="flex w-full items-start">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.label}
            className={cn("flex flex-1 flex-col items-center", !isLast && "relative")}
          >
            {/* Connector line */}
            {!isLast && (
              <span
                className={cn(
                  "absolute left-1/2 top-5 h-0.5 w-full -translate-y-1/2",
                  index < currentStep ? "bg-primary" : "bg-border",
                )}
                aria-hidden
              />
            )}
            {/* Circle */}
            <span
              className={cn(
                "relative z-10 grid size-10 place-items-center rounded-full border-2 text-sm font-semibold transition-colors",
                isCompleted &&
                  "border-primary bg-primary text-primary-foreground",
                isCurrent &&
                  "border-primary bg-background text-primary",
                !isCompleted &&
                  !isCurrent &&
                  "border-border bg-background text-muted",
              )}
            >
              {isCompleted ? <Check className="size-5" /> : index + 1}
            </span>
            {/* Label */}
            <span className="mt-2 text-center text-sm font-medium">
              {step.label}
            </span>
            <span
              className={cn(
                "text-xs",
                isCompleted || isCurrent ? "text-muted" : "text-muted/60",
              )}
            >
              {step.subtitle}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
