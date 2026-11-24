import { Bell, Search } from "lucide-react";

import { Input } from "@/app/_components/ui/input";

export function TopBar() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-full max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <Input
          placeholder="Search jobs, companies..."
          className="h-11 rounded-2xl pl-10"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden rounded-md border border-foreground/10 bg-secondary px-1.5 py-0.5 text-xs text-muted sm:inline-block">
          ⌘ K
        </kbd>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
        </button>
        <div className="grid size-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
          GV
        </div>
      </div>
    </div>
  );
}
