import { HeroPreview } from "@/app/_components/landing/preview-cards";
import { Badge } from "@/app/_components/ui/badge";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-12">
      <div>
        <Badge>
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          Your Personal Job Tracker
        </Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Track. Organize.
          <span className="mt-1 block text-primary">Get Hired.</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Keep all your job applications, interviews and career progress in one
          place. Never miss an opportunity again.
        </p>
      </div>
      <HeroPreview />
    </section>
  );
}
