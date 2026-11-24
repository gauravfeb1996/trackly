"use client";

import dynamic from "next/dynamic";

import { Card } from "@/app/_components/ui/card";

const ActivityChart = dynamic(
  () =>
    import("@/app/_components/dashboard/activity-chart").then(
      (mod) => mod.ActivityChart,
    ),
  {
    ssr: false,
    loading: () => (
      <Card className="h-[320px] w-full animate-pulse p-6">
        <div className="h-6 w-48 rounded bg-secondary" />
      </Card>
    ),
  },
);

const StatCard = dynamic(
  () =>
    import("@/app/_components/dashboard/stat-card").then(
      (mod) => mod.StatCard,
    ),
  {
    ssr: false,
    loading: () => <Card className="h-[140px] w-full animate-pulse p-5" />,
  },
);

export { ActivityChart, StatCard };
