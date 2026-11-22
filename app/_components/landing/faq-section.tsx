import { SectionIntro } from "@/app/_components/landing/section-intro";

const questions = [
  {
    question: "Is Trackly free to start?",
    answer:
      "Yes. The Free plan is $0 per month and includes application tracking, reminders, and basic analytics.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "You can start on Free and move to Pro or Premium whenever you want a deeper view of your search.",
  },
  {
    question: "What can I track?",
    answer:
      "Applications, interviews, offers, and deadlines — plus the status of each one, in a single dashboard.",
  },
  {
    question: "How do reminders work?",
    answer:
      "Smart reminders flag upcoming interviews and deadlines so a follow-up does not slip past you.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8 lg:py-8"
    >
      <SectionIntro
        eyebrow="Questions"
        title="FAQ"
        description="Short answers before you start tracking."
      />
      <div className="space-y-3">
        {questions.map((item) => (
          <details
            key={item.question}
            className="group rounded-3xl border border-foreground/10 bg-background px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
