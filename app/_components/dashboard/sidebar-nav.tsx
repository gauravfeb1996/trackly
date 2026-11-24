"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Briefcase,
  LayoutDashboard,
  Settings,
  Zap,
} from "lucide-react";

import { Logo } from "@/app/_components/landing/logo";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/applications", label: "Applications", icon: Briefcase },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex h-full flex-col p-4">
      <div className="mb-8 hidden md:block">
        <Logo />
      </div>
      <div className="flex items-center gap-1 overflow-x-auto md:flex-col md:items-stretch md:overflow-x-visible">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.label === "Applications" &&
              pathname.startsWith("/application"));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-secondary text-primary"
                  : "text-muted hover:bg-secondary hover:text-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto hidden pt-6 md:block">
        <div className="rounded-2xl bg-secondary p-4">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="size-4" />
            </span>
            <p className="font-semibold">Stay consistent!</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            You&apos;re on track this week.
          </p>
        </div>
      </div>
    </nav>
  );
}
