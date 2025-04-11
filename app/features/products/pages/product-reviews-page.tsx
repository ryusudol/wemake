import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/product-reviews-page";
import { ReviewCard } from "~/features/products/components/review-card";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import CreateReviewDialog from "../components/create-review-dialog";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" },
  ];
};

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">10 Reviews</h3>
          <DialogTrigger>
            <Button variant="secondary">Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, idx) => (
            <ReviewCard
              key={`reviewId-${idx}`}
              name="Michael Jackson"
              username="username"
              avatarSrc="https://github.com/facebook.png"
              avatarFallback="R"
              rating={4}
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit."
              postedAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
