import { Suspense } from "react";

import { SidebarNav } from "@/app/_components/dashboard/sidebar-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <aside className="hidden flex-none border-foreground/10 md:block md:h-screen md:w-64 md:border-r">
        <Suspense fallback={null}>
          <SidebarNav />
        </Suspense>
      </aside>
      <div className="flex h-screen min-w-0 flex-1 flex-col">
        <div className="md:hidden">
          <Suspense fallback={null}>
            <SidebarNav />
          </Suspense>
        </div>
        <main className="flex-1 overflow-y-auto p-6 md:p-12">{children}</main>
      </div>
    </div>
  );
}
