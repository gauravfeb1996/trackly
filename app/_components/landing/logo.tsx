import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      <span className="grid size-7 place-items-center" aria-hidden>
        <span className="size-3.5 rotate-45 rounded-sm bg-primary" />
      </span>
      Trackly
    </Link>
  );
}
