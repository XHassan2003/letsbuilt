"use cache";
import { StarIcon, ArrowUpRightIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "../products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: "A toolkit for building decentralized applications",
//     tags: ["Saas", "Pricing", "Global"],
//     votes: 200,
//     isFeatured: true,
//   },
//   {
//     id: 2,
//     name: "Full Stack Next.js Course",
//     description: "A comprehensive course for building full stack applications",
//     tags: ["Next.js", "TailwindCSS", "Full Stack"],
//     votes: 100,
//     isFeatured: false,
//   },
// ];

export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Discover our most popular products today."
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
