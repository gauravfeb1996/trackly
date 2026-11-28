"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ApplicationForm } from "@/app/_components/applications/application-form";
import type { ApplicationFormValues } from "@/app/_components/applications/application-schema";
import { saveApplication } from "@/app/_components/applications/application-storage";

export function ApplicationCreatePage({
  initialValues,
}: {
  initialValues: ApplicationFormValues;
}) {
  const router = useRouter();
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  function handleSubmit(values: ApplicationFormValues) {
    setSubmissionError(null);

    try {
      saveApplication(values);
      router.push("/applications");
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? `Unable to save this application: ${error.message}`
          : "Unable to save this application. Please try again.",
      );
    }
  }

  return (
    <ApplicationForm
      mode="create"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      submissionError={submissionError}
    />
  );
}
