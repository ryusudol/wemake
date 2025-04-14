import type { Route } from "./+types/product-visit-page";
import { z } from "zod";
import { data, redirect } from "react-router";
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
  const { data: productData, error } = await client
    .from("products")
    .select("url")
    .eq("product_id", parsedData.productId)
    .single();
  if (error) throw new Error(error.message);
  if (parsedData) {
    await client.rpc("track_event", {
      event_type: "product_visit",
      event_data: { product_id: parsedData.productId },
    });
    return redirect(productData.url);
  }
};
