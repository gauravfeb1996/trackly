import { Calendar } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";
import { Card } from "@/app/_components/ui/card";

type Interview = {
  company: string;
  role: string;
  date: string;
  time: string;
  type: string;
  initials: string;
  accent: string;
};

export function InterviewsList({ interviews }: { interviews: Interview[] }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold tracking-tight">
          Upcoming Interviews
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all →
        </a>
      </div>
      <ul className="mt-5 space-y-5">
        {interviews.map((item) => (
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
              <p className="text-sm text-muted">{item.time}</p>
            </div>
            <Badge>{item.type}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
