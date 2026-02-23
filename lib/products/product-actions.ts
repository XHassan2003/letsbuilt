"use server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./product-validation";
import { error } from "console";
import { db } from "@/db";
import { products } from "@/db/schema";
import z from "zod";
import { FormState } from "@/types";
import { eq, sql } from "drizzle-orm";
import { refresh } from "next/cache";
import { revalidatePath } from "next/cache";

export const addProductAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  console.log(formData);
  //auth
  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "You must be logged in to submit a product.",
      };
    }

    if (!orgId) {
      return {
        success: false,
        message: "You must belong to an organization to submit a product.",
      };
    }
    //data
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";

    const rawFormData = Object.fromEntries(formData.entries());

    //validation
    const validateData = productSchema.safeParse(rawFormData);
    if (!validateData.success) {
      console.log(validateData.error.flatten().fieldErrors);
      return {
        success: false,
        errors: validateData.error.flatten().fieldErrors,
        message: "Please fix the errors in the form.",
      };
    }
    const { name, slug, tagline, description, websiteUrl, tags } =
      validateData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    //transform data
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId,
      userId,
    });
    refresh();

    return {
      success: true,
      message: "Product submitted successfully! It will be reviewed shortly.",
    };
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Invalid form data.",
      };
    }
  }

  return {
    success: false,
    errors: error,
    message: "Failed to submit product",
  };
};

export const upvoteProductAction = async (productId: number) => {
  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      console.log("User not signed in");
      return {
        success: false,
        message: "You must be signed in to submit a product",
      };
    }

    if (!orgId) {
      console.log("User not a member of an organization");
      return {
        success: false,
        message: "You must be a member of an organization to submit a product",
      };
    }

    await db
      .update(products)
      .set({
        voteCount: sql`vote_count + 1`,
      })
      .where(eq(products.id, productId));

    revalidatePath("/");

    return {
      success: true,
      message: "Product upvoted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to upvote product",
      voteCount: 0,
    };
  }
};

export const downvoteProductAction = async (productId: number) => {
  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      console.log("User not signed in");
      return {
        success: false,
        message: "You must be signed in to submit a product",
      };
    }

    if (!orgId) {
      console.log("User not a member of an organization");
      return {
        success: false,
        message: "You must be a member of an organization to submit a product",
      };
    }

    await db
      .update(products)
      .set({
        voteCount: sql`vote_count - 1`,
      })
      .where(eq(products.id, productId));

    revalidatePath("/");

    return {
      success: true,
      message: "Product downvoted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to downvote product",
      voteCount: 0,
    };
  }
};
