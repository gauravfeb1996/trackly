import { Suspense } from "react";
import { connection } from "next/server";

import { ApplicationCreatePage } from "@/app/_components/applications/application-create-page";
import { createDefaultApplicationValues } from "@/app/_components/applications/application-schema";
import { HeaderActions } from "@/app/_components/dashboard/header-actions";
import { PageHeader } from "@/app/_components/dashboard/page-header";

export default function CreateApplicationPage() {
  return (
    <div className="relative -m-6 space-y-3 overflow-x-clip p-3 md:-m-12 md:p-3">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-20 -z-10 size-[30rem] rounded-full bg-orange-100/70 blur-3xl"
      />
      <PageHeader>
        <HeaderActions />
      </PageHeader>
      <Suspense fallback={null}>
        <CreateApplicationForm />
      </Suspense>
    </div>
  );
}

async function CreateApplicationForm() {
  await connection();
  const initialValues = createDefaultApplicationValues();

  return <ApplicationCreatePage initialValues={initialValues} />;
}
