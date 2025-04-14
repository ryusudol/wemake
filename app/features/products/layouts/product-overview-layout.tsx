import { ChevronUpIcon, StarIcon } from "lucide-react";
import { data, Link, NavLink, Outlet } from "react-router";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/product-overview-layout";
import { z } from "zod";
import { getProductById } from "../queries";

const paramsSchema = z.object({
  productId: z.coerce.number().gte(1),
});

export const meta: Route.MetaFunction = ({ data }) => {
  return [{ title: `${data.product.name} Overview | wemake` }];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_product_id", error_message: "Invalid productId" },
      { status: 400 }
    );
  }
  const product = await getProductById(parsedData.productId);
  return { product };
};

export default function ProductOverviewPage({
  loaderData,
}: Route.ComponentProps) {
  const product = loaderData.product;
  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="size-40 rounded-xl shadow-xl bg-primary/50"></div>
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="text-2xl font-light">{product.description}</p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon
                    className="size-4"
                    fill={
                      idx < Math.floor(product.average_rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.reviews} reviews
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            variant="secondary"
            size="lg"
            className="text-lg h-14 px-10"
            asChild
          >
            <Link to={`/products/${product.product_id}/visit`}>
              Visit Website
            </Link>
          </Button>
          <Button size="lg" className="text-lg h-14 px-10">
            <ChevronUpIcon className="size-4" />
            Upvote ({product.upvotes})
          </Button>
        </div>
      </div>
      <div className="flex gap-2.5">
        <NavLink
          end
          className={(props) =>
            cn(
              buttonVariants({ variant: "outline" }),
              props.isActive && "bg-accent text-foreground"
            )
          }
          to={`/products/${product.product_id}/overview`}
        >
          Overview
        </NavLink>
        <NavLink
          end
          className={(props) =>
            cn(
              buttonVariants({ variant: "outline" }),
              props.isActive && "bg-accent text-foreground"
            )
          }
          to={`/products/${product.product_id}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet
          context={{
            product_id: product.product_id,
            description: product.description,
            how_it_works: product.how_it_works,
            review_count: product.reviews,
          }}
        />
      </div>
    </div>
  );
}
