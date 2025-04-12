import type { DateTime } from "luxon";
import client from "~/supa-client";
import { POSTS_PER_PAGE } from "./constant";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
  page = 1,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
  page?: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
        product_id,
        name,
        description,
        upvotes:stats->>upvotes,
        views:stats->>views,
        reviews:stats->>reviews
    `
    )
    .order("stats->>upvotes", { ascending: false })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);
  if (error) throw new Error(error.message);
  return data;
};

export const getProductPagesByDate = async ({
  startDate,
  endDate,
}: {
  startDate: DateTime;
  endDate: DateTime;
}) => {
  const { count, error } = await client
    .from("products")
    .select("product_id", { count: "exact", head: true })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO());
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / POSTS_PER_PAGE);
};
