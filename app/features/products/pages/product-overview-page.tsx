import { data, useOutletContext } from "react-router";
import type { Route } from "./+types/product-overview-page";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  productId: z.coerce.number().gte(1),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_product_id", error_message: "Invalid productId" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  await client.rpc("track_event", {
    event_type: "product_view",
    event_data: { product_id: parsedData.productId },
  });
};

export default function ProductOverviewPage() {
  const { description, how_it_works } = useOutletContext<{
    description: string;
    how_it_works: string;
  }>();
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">{how_it_works}</p>
      </div>
    </div>
  );
}
