import { type Database } from "~/supa-client";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "./constants";
import type { SupabaseClient } from "@supabase/supabase-js";

type JobTypeValue = (typeof JOB_TYPES)[number]["value"];
type LocationTypeValue = (typeof LOCATION_TYPES)[number]["value"];
type SalaryRangeValue = (typeof SALARY_RANGES)[number];

export const getJobs = async (
  client: SupabaseClient<Database>,
  {
    limit,
    type,
    location,
    salary,
  }: {
    limit: number;
    type?: string;
    location?: string;
    salary?: string;
  }
) => {
  const baseQuery = client
    .from("jobs")
    .select(
      `
        job_id,
        position,
        overview,
        company_name,
        company_logo_url,
        company_location,
        apply_url,
        job_type,
        location_type,
        salary_range,
        created_at
    `
    )
    .limit(limit);
  if (type) {
    baseQuery.eq("job_type", type as JobTypeValue);
  }
  if (location) {
    baseQuery.eq("location_type", location as LocationTypeValue);
  }
  if (salary) {
    baseQuery.eq("salary_range", salary as SalaryRangeValue);
  }
  const { data, error } = await baseQuery;
  if (error) throw new Error(error.message);
  return data;
};

export const getJobById = async (
  client: SupabaseClient<Database>,
  { jobId }: { jobId: number }
) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", jobId)
    .single();
  if (error) throw new Error(error.message);
  return data;
};
