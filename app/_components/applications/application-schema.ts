import { z } from "zod";

const isValidDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
};

export const applicationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required."),
  jobTitle: z.string().trim().min(1, "Job title is required."),
  appliedDate: z
    .string()
    .refine(isValidDate, "Enter a valid application date."),
  stage: z.enum(["applied", "phone-screen", "interview", "offer", "rejected"]),
  description: z.string().max(10000, "Description is too long."),
  notes: z.string().max(5000, "Notes are too long."),
  recruiterName: z.string().trim().max(120, "Recruiter name is too long."),
  recruiterEmail: z
    .string()
    .trim()
    .email("Enter a valid recruiter email.")
    .or(z.literal("")),
  jobPostingUrl: z
    .string()
    .trim()
    .url("Enter a valid job posting URL.")
    .or(z.literal("")),
  companyCareersUrl: z
    .string()
    .trim()
    .url("Enter a valid company careers URL.")
    .or(z.literal("")),
  tags: z
    .array(z.string().trim().min(1, "Tags cannot be empty."))
    .max(12, "You can add up to 12 tags."),
  status: z.enum(["active", "offer", "rejected"]),
});

export const savedApplicationSchema = applicationSchema.extend({
  id: z.string().min(1),
});

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
export type SavedApplication = z.infer<typeof savedApplicationSchema>;

export function createDefaultApplicationValues(): ApplicationFormValues {
  return {
    companyName: "",
    jobTitle: "",
    appliedDate: new Date().toISOString().slice(0, 10),
    stage: "applied",
    description: "",
    notes: "",
    recruiterName: "",
    recruiterEmail: "",
    jobPostingUrl: "",
    companyCareersUrl: "",
    tags: [],
    status: "active",
  };
}
