import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Developer Tools | wemake` },
    { name: "description", content: `Browse Developer Tools category` },
  ];
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title="Developer Tools"
        description="Tools for developers to build products faster"
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, idx) => (
          <ProductCard
            key={`productId: ${idx}`}
            id={`${idx}`}
            title="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={5} />
    </div>
  );
}
