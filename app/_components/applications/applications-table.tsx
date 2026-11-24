import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { cn } from "@/lib/utils";

type Stage = "applied" | "interview" | "phone-screen" | "offer" | "rejected";
type Status = "active" | "offer" | "rejected";

export type Application = {
  id: string;
  company: string;
  role: string;
  stage: Stage;
  appliedOn: string;
  status: Status;
  initials: string;
  accent: string;
};

const stageVariant: Record<
  Stage,
  "info" | "warning" | "purple" | "success" | "destructive"
> = {
  applied: "info",
  interview: "warning",
  "phone-screen": "purple",
  offer: "success",
  rejected: "destructive",
};

const statusVariant: Record<Status, "success" | "warning" | "destructive"> = {
  active: "success",
  offer: "warning",
  rejected: "destructive",
};

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function ApplicationsTable({ data }: { data: Application[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Applied On</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((app) => (
          <TableRow key={app.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid size-8 shrink-0 place-items-center rounded-full text-xs font-semibold text-white",
                    app.accent,
                  )}
                >
                  {app.initials}
                </span>
                <span className="font-medium">{app.company}</span>
              </div>
            </TableCell>
            <TableCell className="text-muted">{app.role}</TableCell>
            <TableCell>
              <Badge variant={stageVariant[app.stage]}>
                {formatLabel(app.stage)}
              </Badge>
            </TableCell>
            <TableCell className="text-muted">{app.appliedOn}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[app.status]}>
                {formatLabel(app.status)}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Link
                href={`/applications/${app.id}/details`}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
              >
                Details
                <ChevronRight className="size-4" />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
