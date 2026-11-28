import { Bell } from "lucide-react";

export function HeaderActions() {
  return (
    <div className="ml-auto flex items-center justify-end gap-3">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-secondary hover:text-foreground"
        aria-label="Notifications"
      >
        <Bell className="size-5" />
      </button>
      <div
        role="img"
        aria-label="User profile: GV"
        className="grid size-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground"
      >
        GV
      </div>
    </div>
  );
}
