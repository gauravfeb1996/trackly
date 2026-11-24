import { Calendar } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import { Card } from "@/app/_components/ui/card";

type ApplicationStatus = "applied" | "in-review" | "interview" | "offer";

type Application = {
  company: string;
  role: string;
  date: string;
  status: ApplicationStatus;
  initials: string;
  accent: string;
};

const statusVariant: Record<ApplicationStatus, "success" | "info" | "default"> = {
  applied: "success",
  "in-review": "info",
  interview: "default",
  offer: "default",
};

function formatStatus(status: ApplicationStatus) {
  return status
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ApplicationsList({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">
          Recent Applications
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all →
        </a>
      </div>
      <ul className="mt-5 space-y-5">
        {applications.map((item) => (
          <li key={item.company} className="flex items-center gap-4">
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold text-white ${item.accent}`}
            >
              {item.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{item.company}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </div>
            <div className="hidden text-right sm:block">
              <p className="flex items-center justify-end gap-1.5 text-sm">
                <Calendar className="size-3.5 text-muted" />
                {item.date}
              </p>
            </div>
            <Badge variant={statusVariant[item.status]}>
              {formatStatus(item.status)}
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
