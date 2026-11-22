"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SectionIntro } from "@/app/_components/landing/section-intro";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";

const stories = [
  {
    quote:
      "Trackly made my job search so much easier. I never missed an interview and finally got my dream job!",
    name: "Rohit Sharma",
    role: "Software Engineer · Google",
    initials: "RS",
  },
  {
    quote:
      "Clean design, powerful features and super easy to use. Highly recommended!",
    name: "Priya Mehta",
    role: "Frontend Developer · Microsoft",
    initials: "PM",
  },
  {
    quote:
      "A must-have tool for every job seeker. It keeps me organized and motivated!",
    name: "Aman Verma",
    role: "SDE · Amazon",
    initials: "AV",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [0, 1, 2].map(
    (offset) => stories[(index + offset) % stories.length],
  );

  function shift(direction: -1 | 1) {
    setIndex((current) => (current + direction + stories.length) % stories.length);
  }

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          eyebrow="Loved by Job Seekers"
          title="Real Stories. Real Success."
          description="See how Trackly has helped job seekers stay organized and get hired."
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous stories"
            onClick={() => shift(-1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next stories"
            onClick={() => shift(1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {visible.map((story, storyIndex) => (
          <Card
            key={story.name}
            className={`flex h-full flex-col p-6 ${storyIndex > 0 ? "hidden md:flex" : ""}`}
          >
            <span className="text-4xl leading-none text-primary/40" aria-hidden>
              “
            </span>
            <p className="mt-3 flex-1 text-sm leading-relaxed">{story.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-secondary text-sm font-semibold text-primary">
                {story.initials}
              </span>
              <div>
                <p className="text-sm font-semibold">{story.name}</p>
                <p className="text-xs text-muted">{story.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
