import type { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-14">
      <header className="fixed inset-x-0 top-[68px] z-50 bg-background/95 px-6 py-2 backdrop-blur md:left-64 md:top-0 md:px-12">
        {children}
      </header>
    </div>
  );
}
