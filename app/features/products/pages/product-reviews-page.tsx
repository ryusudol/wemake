import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-reviews-page";
import { ReviewCard } from "~/features/products/components/review-card";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import CreateReviewDialog from "../components/create-review-dialog";
import { data, useOutletContext } from "react-router";
import { getReviews } from "../queries";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  productId: z.coerce.number().gte(1),
});

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" },
  ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_product_id", error_message: "Invalid productId" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const reviews = await getReviews(client, { productId: parsedData.productId });
  return { reviews };
};

export default function ProductReviewsPage({
  loaderData,
}: Route.ComponentProps) {
  const { review_count } = useOutletContext<{ review_count: string }>();
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">
            {review_count}{" "}
            {review_count === "0" || review_count === "1"
              ? "Review"
              : "Reviews"}
          </h3>
          <DialogTrigger>
            <Button variant="secondary">Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {loaderData.reviews.map((review) => (
            <ReviewCard
              key={review.review_id}
              name={review.user.name}
              username={review.user.username}
              avatarSrc={review.user.avatar}
              rating={review.rating}
              content={review.review}
              postedAt={review.created_at}
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
