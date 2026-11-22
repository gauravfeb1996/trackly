import { Badge } from "@/app/_components/ui/badge";

export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-md">
      <Badge>
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        {eyebrow}
      </Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
