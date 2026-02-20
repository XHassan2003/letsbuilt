import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentProducts() {
  const recentProducts = [
    // {
    //   id: 1,
    //   name: "ParityKit",
    //   description: "A toolkit for building decentralized applications",
    //   tags: ["Saas", "Pricing", "Global"],
    //   votes: 200,
    //   isFeatured: true,
    // },
    // {
    //   id: 2,
    //   name: "Full Stack Next.js Course",
    //   description:
    //     "A comprehensive course for building full stack applications",
    //   tags: ["Next.js", "TailwindCSS", "Full Stack"],
    //   votes: 100,
    //   isFeatured: false,
    // },
  ];
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recent Products"
          icon={RocketIcon}
          description="The most recently launched products on the platform"
        />
        {recentProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState message="No recent products available. Check back later!" icon={CalendarIcon} />
        )}
      </div>
    </section>
  );
}
