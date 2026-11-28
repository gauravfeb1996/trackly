import {
  savedApplicationSchema,
  type ApplicationFormValues,
  type SavedApplication,
} from "@/app/_components/applications/application-schema";

const storageKey = "trackly:saved-applications";

export function readSavedApplications(): SavedApplication[] {
  const storedValue = window.localStorage.getItem(storageKey);

  if (!storedValue) {
    return [];
  }

  const result = savedApplicationSchema
    .array()
    .safeParse(JSON.parse(storedValue));

  if (!result.success) {
    throw new Error("Saved applications in this browser are invalid.");
  }

  return result.data;
}

export function saveApplication(
  values: ApplicationFormValues,
): SavedApplication {
  const application = {
    ...values,
    id: crypto.randomUUID(),
  };

  const applications = [...readSavedApplications(), application];
  window.localStorage.setItem(storageKey, JSON.stringify(applications));

  return application;
}
