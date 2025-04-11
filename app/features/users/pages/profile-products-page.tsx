import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Products | wemake" }];
};

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <ProductCard
          key={`productId: ${idx}`}
          id={`productId: ${idx}`}
          title="Product Name"
          description="Product description"
          commentCount={12}
          viewCount={120}
          upvoteCount={12}
        />
      ))}
    </div>
  );
}
