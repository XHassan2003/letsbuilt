"use client";
import { FormField } from "@/components/forms/form-field";
import { Button } from "../ui/button";
import { LoaderIcon, SparklesIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/product-actions";
import { useActionState } from "react";
import { FormState } from "@/types";
import { cn } from "@/lib/utils";

const initialState: FormState = {
  success: false,
  errors: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  const { errors, message, success } = state;
  const getFieldErrors = (fieldName: string): string[] => {
    if (!errors) return [];
    return (errors as Record<string, string[]>)[fieldName] ?? [];
  };

  return (
    <form action={formAction}>
      {message && (
        <div
          className={cn(
            "p-4 rounded-lg border",
            success
              ? "bg-primary/10 border-primary text-primary"
              : "bg-destructive/10 border-destructive text-destructive",
          )}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}
      <div className="space-y-6">
        <FormField
          label="Product Name"
          name="name"
          id="name"
          placeholder="My Awesome Project"
          required
          onChange={() => {}}
          error={getFieldErrors("name")}
        />
        <FormField
          label="Slug"
          name="slug"
          id="slug"
          placeholder="my-awesome-project"
          required
          onChange={() => {}}
          error={getFieldErrors("slug")}
          helperText="URL-friendly version of the project name."
        />
        <FormField
          label="Tagline"
          name="tagline"
          id="tagline"
          placeholder="A brief, catchy description"
          required
          onChange={() => {}}
          error={getFieldErrors("tagline")}
        />
        <FormField
          label="Description"
          name="description"
          id="description"
          placeholder="Describe your project in detail..."
          required
          onChange={() => {}}
          error={getFieldErrors("description")}
          textarea
        />
        <FormField
          label="Website URL"
          name="websiteUrl"
          id="websiteUrl"
          placeholder="https://yourproject.com"
          required
          onChange={() => {}}
          error={getFieldErrors("websiteUrl")}
          helperText="Enter your project's website URL"
        />
        <FormField
          label="Tags"
          name="tags"
          id="tags"
          placeholder="e.g., Web, Design, Development"
          required
          onChange={() => {}}
          error={getFieldErrors("tags")}
          helperText="Comma-separated tags for your project (e.g., Web, Design, Development)"
        />
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        {isPending ? (
          <LoaderIcon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" /> Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
