"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Link2,
  Mail,
  Tag,
  UsersRound,
} from "lucide-react";

import {
  applicationSchema,
  type ApplicationFormValues,
} from "@/app/_components/applications/application-schema";
import {
  SchemaForm,
  type SchemaFormSection,
} from "@/app/_components/ui/schema-form";
import { Button } from "@/app/_components/ui/button";

type ApplicationFormProps = {
  mode: "create" | "edit";
  initialValues: ApplicationFormValues;
  onSubmit: (values: ApplicationFormValues) => void;
  cancelHref?: string;
  submissionError?: string | null;
};

const sections: SchemaFormSection[] = [
  {
    id: "job-details",
    title: "Job Details",
    icon: <BriefcaseBusiness className="size-4" />,
    column: "primary",
    fields: [
      {
        name: "companyName",
        label: "Company Name",
        kind: "text",
        placeholder: "e.g. Google",
        required: true,
        icon: Building2,
      },
      {
        name: "jobTitle",
        label: "Job Title",
        kind: "text",
        placeholder: "e.g. Senior Frontend Engineer",
        required: true,
      },
      {
        name: "appliedDate",
        label: "Applied Date",
        kind: "date",
        required: true,
        icon: CalendarDays,
        width: "half",
      },
      {
        name: "stage",
        label: "Application Stage",
        kind: "select",
        required: true,
        width: "half",
        options: [
          { value: "applied", label: "Applied" },
          { value: "phone-screen", label: "Phone Screen" },
          { value: "interview", label: "Interview" },
          { value: "offer", label: "Offer" },
          { value: "rejected", label: "Rejected" },
        ],
      },
      {
        name: "description",
        label: "Job Description",
        kind: "textarea",
        placeholder: "Paste the job description here...",
      },
      {
        name: "notes",
        label: "My Notes",
        kind: "textarea",
        placeholder: "Add notes about this opportunity...",
      },
    ],
  },
  {
    id: "recruiter-links",
    title: "Recruiter & Links",
    icon: <UsersRound className="size-4" />,
    column: "secondary",
    fields: [
      {
        name: "recruiterName",
        label: "Recruiter Name",
        kind: "text",
        placeholder: "Recruiter name",
      },
      {
        name: "recruiterEmail",
        label: "Recruiter Email",
        kind: "email",
        placeholder: "name@company.com",
        icon: Mail,
      },
      {
        name: "jobPostingUrl",
        label: "Job Posting URL",
        kind: "url",
        placeholder: "https://...",
        icon: Link2,
      },
      {
        name: "companyCareersUrl",
        label: "Company Careers URL",
        kind: "url",
        placeholder: "https://...",
        icon: Link2,
      },
    ],
  },
  {
    id: "tags-info",
    title: "Tags & Info",
    icon: <Tag className="size-4" />,
    column: "secondary",
    fields: [
      {
        name: "tags",
        label: "Tags",
        kind: "tags",
        placeholder: "Add a tag",
      },
      {
        name: "status",
        label: "Status",
        kind: "select",
        layout: "inline",
        options: [
          { value: "active", label: "Active" },
          { value: "offer", label: "Offer" },
          { value: "rejected", label: "Rejected" },
        ],
      },
    ],
  },
];

export function ApplicationForm({
  mode,
  initialValues,
  onSubmit,
  cancelHref = "/applications",
  submissionError,
}: ApplicationFormProps) {
  const formId = "application-form";
  const heading = mode === "create" ? "Add Application" : "Edit Application";

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link
            href={cancelHref}
            className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Applications
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h1>
          <p className="mt-1 text-muted">
            Save a job opportunity and keep your search organized.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="default" asChild>
            <Link href={cancelHref}>Cancel</Link>
          </Button>
          <Button variant="primary" type="submit" form={formId}>
            {mode === "create" ? "Save Application" : "Save Changes"}
          </Button>
        </div>
      </div>

      <SchemaForm
        id={formId}
        schema={applicationSchema}
        initialValues={initialValues}
        sections={sections}
        onSubmit={onSubmit}
        submissionError={submissionError}
      />
    </div>
  );
}
