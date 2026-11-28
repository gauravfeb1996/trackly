import { Search } from "lucide-react";

import { HeaderActions } from "@/app/_components/dashboard/header-actions";
import { Input } from "@/app/_components/ui/input";

export function TopBar() {
  return (
    <div className="relative h-14">
      <header className="fixed inset-x-0 top-[68px] z-50 bg-background/95 px-6 py-2 backdrop-blur md:left-64 md:top-0 md:px-12">
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
          <HeaderActions />
        </div>
      </header>
    </div>
  );
}
