import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/_components/ui/button";

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-background sm:px-12 md:py-16">
        <div
          className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full bg-background/15"
          aria-hidden
        />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to take control of your job search?
            </h2>
            <p className="mt-3 text-background/80">
              Join thousands of job seekers and start tracking your journey
              today.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Get Started
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
