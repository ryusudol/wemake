import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/categories-page";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-20">
      <Hero title="Categories" description="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, idx) => (
          <CategoryCard
            key={`categoryId-${idx}`}
            id={`categoryId-${idx}`}
            name="Category Name"
            description="Card Description"
          />
        ))}
      </div>
    </div>
  );
}
