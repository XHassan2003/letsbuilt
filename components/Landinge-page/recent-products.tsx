import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";

export default async function RecentProducts() {
  const recentProducts = await getRecentProducts();
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
          <EmptyState
            message="No recent products available. Check back later!"
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
