import FeaturedProducts from "@/components/ui/Landinge-page/featured-products";
import HeroSection from "@/components/ui/Landinge-page/hero-section";import RecentProducts from "@/components/ui/Landinge-page/recent-products";

export default function Home() {
  return (
    <div>
      <HeroSection/>

      <FeaturedProducts/>

      <RecentProducts/>
    </div>
  );
}
