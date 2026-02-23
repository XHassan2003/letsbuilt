import FeaturedProducts from "@/components/Landinge-page/featured-products";
import HeroSection from "@/components/Landinge-page/hero-section";
import RecentProducts from "@/components/Landinge-page/recent-products";
import ProductSkeleton from "@/components/products/product-skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentProducts />
      </Suspense>
    </div>
  );
}
