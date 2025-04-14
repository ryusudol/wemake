import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";
import { z } from "zod";
import { data } from "react-router";
import { getUserProducts } from "../queries";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  username: z.string(),
});

export const meta: Route.MetaFunction = () => {
  return [{ title: "Products | wemake" }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_username", error_message: "Invalid username" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const products = await getUserProducts(client, {
    username: parsedData.username,
  });
  return { products };
};

export default function ProfileProductsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.products.map((product) => (
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
  );
}
