import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import {
  getCategory,
  getCategoryTotalPages,
  getProductsByCategory,
} from "../queries";
import { z } from "zod";
import { data } from "react-router";
import { makeSSRClient } from "~/supa-client";

type CategoryType = Awaited<ReturnType<typeof getCategory>>;
type ProductsType = Awaited<ReturnType<typeof getProductsByCategory>>;

const paramsSchema = z.object({
  category: z.coerce.number().gte(1),
});

const searchParamsSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const meta: Route.MetaFunction = ({ data }) => {
  return [
    { title: `${data.category.name} | wemake` },
    { name: "description", content: `${data.category.description}` },
  ];
};

export const loader = async ({
  params,
  request,
}: Route.LoaderArgs): Promise<{
  category: CategoryType;
  products: ProductsType;
  totalPages: number;
}> => {
  const url = new URL(request.url);
  const { success: pageSuccess, data: parsedPage } =
    searchParamsSchema.safeParse(Object.fromEntries(url.searchParams));
  if (!pageSuccess) {
    throw data(
      { error_code: "invalid_page", error_message: "Invalid page" },
      { status: 400 }
    );
  }
  const { success: categorySuccess, data: parsedCategory } =
    paramsSchema.safeParse(params);
  if (!categorySuccess) {
    throw data(
      { error_code: "invalid_category", error_message: "Invalid category" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const [category, products, totalPages]: [CategoryType, ProductsType, number] =
    await Promise.all([
      getCategory(client, { category: parsedCategory.category }),
      getProductsByCategory(client, {
        categoryId: parsedCategory.category,
        page: parsedPage.page,
      }),
      getCategoryTotalPages(client, { categoryId: parsedCategory.category }),
    ]);
  return { category, products, totalPages };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title={loaderData.category.name}
        description={loaderData.category.description}
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product: ProductsType[number]) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id}
            productName={product.name}
            description={product.tagline}
            reviewCount={product.reviews}
            viewCount={product.views}
            upvoteCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}
