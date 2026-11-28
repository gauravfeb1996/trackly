"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown, Plus, X, type LucideIcon } from "lucide-react";
import { z } from "zod";

import { Input } from "@/app/_components/ui/input";
import { cn } from "@/lib/utils";

type FormValue = string | string[];

export type SchemaFormField = {
  name: string;
  label: string;
  kind: "text" | "email" | "url" | "date" | "select" | "textarea" | "tags";
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  options?: { value: string; label: string }[];
  width?: "full" | "half";
  layout?: "inline";
};

export type SchemaFormSection = {
  id: string;
  title: string;
  icon: ReactNode;
  fields: SchemaFormField[];
  column: "primary" | "secondary";
};

type SchemaFormProps<T> = {
  id: string;
  schema: z.ZodType<T>;
  initialValues: Record<string, FormValue>;
  sections: SchemaFormSection[];
  onSubmit: (values: T) => void;
  submissionError?: string | null;
};

export function SchemaForm<T>({
  id,
  schema,
  initialValues,
  sections,
  onSubmit,
  submissionError,
}: SchemaFormProps<T>) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [tagDraft, setTagDraft] = useState("");

  function updateValue(name: string, value: FormValue) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = schema.safeParse(values);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      let nextFormError: string | null = null;

      for (const issue of result.error.issues) {
        const fieldName = issue.path[0]?.toString();
        if (fieldName && !nextErrors[fieldName]) {
          nextErrors[fieldName] = issue.message;
        } else if (!fieldName && !nextFormError) {
          nextFormError = issue.message;
        }
      }

      setErrors(nextErrors);
      setFormError(nextFormError);
      return;
    }

    setErrors({});
    setFormError(null);
    onSubmit(result.data);
  }

  function addTag(fieldName: string) {
    const tag = tagDraft.trim();
    if (!tag) {
      return;
    }

    const currentTags = values[fieldName];
    if (!Array.isArray(currentTags) || currentTags.includes(tag)) {
      setTagDraft("");
      return;
    }

    updateValue(fieldName, [...currentTags, tag]);
    setTagDraft("");
  }

  const renderSection = (section: SchemaFormSection) => (
    <section
      key={section.id}
      className="rounded-2xl border border-foreground/10 bg-white p-3 shadow-sm"
      aria-labelledby={`${section.id}-title`}
    >
      <h2
        id={`${section.id}-title`}
        className="mb-3 flex items-center gap-3 text-lg font-semibold tracking-tight"
      >
        <span className="grid size-8 place-items-center rounded-lg bg-secondary text-primary">
          {section.icon}
        </span>
        {section.title}
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
        {section.fields.map((field) => {
          const fieldId = `${id}-${field.name}`;
          const errorId = `${fieldId}-error`;
          const error = errors[field.name];
          const value = values[field.name];
          const fullWidth = field.width !== "half";
          const fieldClassName = fullWidth ? "sm:col-span-2" : "";
          const FieldIcon = field.icon;
          const describedBy = error ? errorId : undefined;

          return (
            <div
              key={field.name}
              className={cn(
                "min-w-0",
                fieldClassName,
                field.layout === "inline" &&
                  "flex items-center justify-between gap-3",
              )}
            >
              <label
                htmlFor={fieldId}
                className={cn(
                  "mb-1.5 block text-sm font-medium",
                  field.layout === "inline" && "mb-0 shrink-0",
                )}
              >
                {field.label}
                {field.required && (
                  <span className="ml-1 text-primary" aria-hidden="true">
                    *
                  </span>
                )}
              </label>

              {field.kind === "textarea" ? (
                <textarea
                  id={fieldId}
                  name={field.name}
                  value={typeof value === "string" ? value : ""}
                  placeholder={field.placeholder}
                  onChange={(event) =>
                    updateValue(field.name, event.target.value)
                  }
                  aria-invalid={Boolean(error)}
                  aria-describedby={describedBy}
                  className={cn(
                    "min-h-[4.5rem] w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm shadow-xs transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    error && "border-destructive focus-visible:ring-destructive",
                  )}
                />
              ) : field.kind === "select" ? (
                <div
                  className={cn(
                    "relative",
                    field.layout === "inline" && "w-1/2",
                  )}
                >
                  <select
                    id={fieldId}
                    name={field.name}
                    value={typeof value === "string" ? value : ""}
                    onChange={(event) =>
                      updateValue(field.name, event.target.value)
                    }
                    aria-invalid={Boolean(error)}
                    aria-describedby={describedBy}
                    className={cn(
                      "h-10 w-full appearance-none rounded-xl border border-input bg-background px-3 pr-9 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      error && "border-destructive focus-visible:ring-destructive",
                    )}
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                </div>
              ) : field.kind === "tags" ? (
                <div>
                  <div
                    className={cn(
                      "flex min-h-10 flex-wrap items-center gap-1.5 rounded-xl border border-input bg-background p-1.5 shadow-xs",
                      error && "border-destructive",
                    )}
                    aria-describedby={describedBy}
                  >
                    {Array.isArray(value) &&
                      value.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() =>
                              updateValue(
                                field.name,
                                value.filter((currentTag) => currentTag !== tag),
                              )
                            }
                            aria-label={`Remove ${tag} tag`}
                            className="rounded-full hover:text-foreground"
                          >
                            <X className="size-3" />
                          </button>
                        </span>
                      ))}
                    <input
                      id={fieldId}
                      value={tagDraft}
                      placeholder={field.placeholder ?? "Add a tag"}
                      onChange={(event) => setTagDraft(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          addTag(field.name);
                        }
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={describedBy}
                      className="min-w-24 flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted"
                    />
                    <button
                      type="button"
                      onClick={() => addTag(field.name)}
                      className="inline-flex items-center gap-1 rounded-lg border border-input px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
                    >
                      <Plus className="size-3.5" />
                      Add tag
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {FieldIcon && (
                    <FieldIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
                  )}
                  <Input
                    id={fieldId}
                    name={field.name}
                    type={field.kind}
                    value={typeof value === "string" ? value : ""}
                    placeholder={field.placeholder}
                    onChange={(event) =>
                      updateValue(field.name, event.target.value)
                    }
                    aria-invalid={Boolean(error)}
                    aria-describedby={describedBy}
                    className={cn(
                      "h-10",
                      FieldIcon && "pl-10",
                      error &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                  />
                </div>
              )}

              {error && (
                <p
                  id={errorId}
                  className={cn(
                    "mt-1.5 text-xs text-destructive",
                    field.layout === "inline" && "basis-full",
                  )}
                >
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <form id={id} noValidate onSubmit={handleSubmit} className="space-y-3">
      {(formError || submissionError) && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
        >
          {submissionError ?? formError}
        </p>
      )}
      <div className="grid items-start gap-3 md:grid-cols-[1.25fr_1fr]">
        <div className="space-y-4">
          {sections
            .filter((section) => section.column === "primary")
            .map(renderSection)}
        </div>
        <div className="space-y-4">
          {sections
            .filter((section) => section.column === "secondary")
            .map(renderSection)}
        </div>
      </div>
    </form>
  );
}
