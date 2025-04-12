import { DateTime } from "luxon";
import type { Route } from "./+types/yearly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";
import { getProductPagesByDate, getProductsByDateRange } from "../queries";
import { POSTS_PER_PAGE } from "../constant";

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({ year: Number(params.year) })
    .setZone("Asia/Seoul")
    .setLocale("en");
  return [
    { title: `Best of ${date.toLocaleString({ year: "numeric" })} | wemake` },
  ];
};

const paramsSchema = z.object({ year: z.coerce.number() });

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_params", message: "Invalid params" },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject({ year: parsedData.year }).setZone(
    "Asia/Seoul"
  );
  if (!date.isValid) {
    throw data(
      { error_code: "invalid_date", message: "Invalid date" },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      { error_code: "future_date", message: "Future date" },
      { status: 400 }
    );
  }
  const url = new URL(request.url);
  const products = await getProductsByDateRange({
    startDate: date.startOf("year"),
    endDate: date.endOf("year"),
    limit: POSTS_PER_PAGE,
    page: Number(url.searchParams.get("page") || 1),
  });
  const totalPages = await getProductPagesByDate({
    startDate: date.startOf("day"),
    endDate: date.endOf("day"),
  });
  return { parsedData, totalPages, products };
};

export default function YearlyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({ year: loaderData.parsedData.year });
  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("year"));
  return (
    <div className="space-y-10">
      <Hero title={`Best of ${urlDate.toLocaleString({ year: "numeric" })}`} />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            &larr; {previousYear.toLocaleString({ year: "numeric" })}
          </Link>
        </Button>
        {!isToday && (
          <Button variant="secondary" asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.toLocaleString({ year: "numeric" })} &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            productId={product.product_id}
            productName={product.name}
            description={product.description}
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
