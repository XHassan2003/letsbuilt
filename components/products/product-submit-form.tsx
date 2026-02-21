"use client";
import { FormField } from "@/components/forms/form-field";
import { Button } from "../ui/button";
import { SparklesIcon } from "lucide-react";
import { addProduct } from "@/lib/products/product-actions";

export default function ProductSubmitForm() {
  const handleSubmit = async (formData: FormData) => {
    await addProduct(formData);
  };
  return (
    <form action={handleSubmit}>
      <div className="space-y-6">
        <FormField
          label="Product Name"
          name="name"
          id="name"
          placeholder="My Awesome Project"
          required
          onChange={() => {}}
          error=""
        />
        <FormField
          label="Slug"
          name="slug"
          id="slug"
          placeholder="my-awesome-project"
          required
          onChange={() => {}}
          error=""
          helperText="URL-friendly version of the project name."
        />
        <FormField
          label="Tagline"
          name="tagline"
          id="tagline"
          placeholder="A brief, catchy description"
          required
          onChange={() => {}}
          error=""
        />
        <FormField
          label="Description"
          name="description"
          id="description"
          placeholder="Describe your project in detail..."
          required
          onChange={() => {}}
          error=""
          textarea
        />
        <FormField
          label="Website URL"
          name="websiteUrl"
          id="websiteUrl"
          placeholder="https://yourproject.com"
          required
          onChange={() => {}}
          error=""
          helperText="Enter your project's website URL"
        />
        <FormField
          label="Tags"
          name="tags"
          id="tags"
          placeholder="e.g., Web, Design, Development"
          required
          onChange={() => {}}
          error=""
          helperText="Comma-separated tags for your project (e.g., Web, Design, Development)"
        />
      </div>
      <Button type="submit" className="mt-6 w-full" size="lg">
        <SparklesIcon className="size-4" /> Submit Product
      </Button>
    </form>
  );
}
