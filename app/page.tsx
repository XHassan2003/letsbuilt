import FeaturedProducts from "@/components/Landinge-page/featured-products";
import HeroSection from "@/components/Landinge-page/hero-section";
import RecentProducts from "@/components/Landinge-page/recent-products";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />
      <Suspense
        fallback={
          <div className="flex items-center justify-center space-x-2">
            <LoaderIcon className="animate-spin" />
            Loading Recent Products...
          </div>
        }
      >
        <RecentProducts />
      </Suspense>
    </div>
  );
}
