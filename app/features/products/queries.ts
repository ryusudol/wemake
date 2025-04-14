import type { DateTime } from "luxon";
import { type Database } from "~/supa-client";
import { POSTS_PER_PAGE } from "./constant";
import type { SupabaseClient } from "@supabase/supabase-js";

export const productListSelect = `
  product_id,
  name,
  tagline,
  upvotes:stats->>upvotes,
  views:stats->>views,
  reviews:stats->>reviews
`;

export const getProductsByDateRange = async (
  client: SupabaseClient<Database>,
  {
    startDate,
    endDate,
    limit,
    page = 1,
  }: {
    startDate: DateTime;
    endDate: DateTime;
    limit: number;
    page?: number;
  }
) => {
  const { data, error } = await client
    .from("products")
    .select(productListSelect)
    .order("stats->>upvotes", { ascending: false })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);
  if (error) throw new Error(error.message);
  return data;
};

export const getProductPagesByDate = async (
  client: SupabaseClient<Database>,
  {
    startDate,
    endDate,
  }: {
    startDate: DateTime;
    endDate: DateTime;
  }
) => {
  const { count, error } = await client
    .from("products")
    .select("product_id", { count: "exact", head: true })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO());
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / POSTS_PER_PAGE);
};

export const getCategories = async (
  client: SupabaseClient<Database>,
  { limit }: { limit: number }
) => {
  const { data, error } = await client
    .from("categories")
    .select(`category_id, name, description`)
    .limit(limit);
  if (error) throw new Error(error.message);
  return data;
};

export const getCategory = async (
  client: SupabaseClient<Database>,
  { category }: { category: number }
) => {
  const { data, error } = await client
    .from("categories")
    .select(`category_id, name, description`)
    .eq("category_id", category)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const getProductsByCategory = async (
  client: SupabaseClient<Database>,
  {
    categoryId,
    page,
  }: {
    categoryId: number;
    page: number;
  }
) => {
  const { data, error } = await client
    .from("products")
    .select(productListSelect)
    .eq("category_id", categoryId)
    .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);
  if (error) throw new Error(error.message);
  return data;
};

export const getCategoryTotalPages = async (
  client: SupabaseClient<Database>,
  { categoryId }: { categoryId: number }
) => {
  const { count, error } = await client
    .from("products")
    .select("product_id", { count: "exact", head: true })
    .eq("category_id", categoryId);
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / POSTS_PER_PAGE);
};

export const getProductsBySearch = async (
  client: SupabaseClient<Database>,
  {
    query,
    page,
  }: {
    query: string;
    page: number;
  }
) => {
  const { data, error } = await client
    .from("products")
    .select(productListSelect)
    .or(`name.ilike.%${query}%, tagline.ilike.%${query}%`)
    .range((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE - 1);
  if (error) throw new Error(error.message);
  return data;
};

export const getPagesBySearch = async (
  client: SupabaseClient<Database>,
  { query }: { query: string }
) => {
  const { count, error } = await client
    .from("products")
    .select("product_id", { count: "exact", head: true })
    .or(`name.ilike.%${query}%, tagline.ilike.%${query}%`);
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / POSTS_PER_PAGE);
};

export const getProductById = async (
  client: SupabaseClient<Database>,
  { productId }: { productId: number }
) => {
  const { data, error } = await client
    .from("product_overview_view")
    .select("*")
    .eq("product_id", productId)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const getReviews = async (
  client: SupabaseClient<Database>,
  { productId }: { productId: number }
) => {
  const { data, error } = await client
    .from("reviews")
    .select(
      `
      review_id,
      rating,
      review,
      created_at,
      user:profiles!inner(name, username, avatar)
    `
    )
    .eq("product_id", productId);
  if (error) throw new Error(error.message);
  return data;
};
