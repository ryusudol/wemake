import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import { data, useSearchParams } from "react-router";
import { cn } from "~/lib/utils";
import { getJobs } from "../queries";
import { z } from "zod";

const searchParamsSchema = z.object({
  type: z
    .enum(JOB_TYPES.map((type) => type.value) as [string, ...string[]])
    .optional(),
  location: z
    .enum(LOCATION_TYPES.map((type) => type.value) as [string, ...string[]])
    .optional(),
  salary: z.enum(SALARY_RANGES).optional(),
});

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = searchParamsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        error_message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const jobs = await getJobs({
    limit: 20,
    type: parsedData.type,
    location: parsedData.location,
    salary: parsedData.salary,
  });
  return { jobs };
};

export default function JobsPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value === newSearchParams.get(key)) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParams(newSearchParams);
  };
  const onClearAllClick = () => {
    setSearchParams({}, { preventScrollReset: true });
  };
  return (
    <div className="space-y-20">
      <Hero title="Jobs" description="Companies looking for makers" />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5 ">
          {loaderData.jobs.map((job) => (
            <JobCard
              key={job.job_id}
              id={job.job_id}
              company={job.company_name}
              companyLogoUrl={job.company_logo_url}
              companyHq={job.company_location}
              postedAt={job.created_at}
              title={job.position}
              employmentType={job.job_type}
              positionLocation={job.location_type}
              salary={job.salary_range}
            />
          ))}
        </div>
        <div className="xl:col-span-2 flex flex-col gap-10 sticky top-20">
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((jobType, idx) => (
                <Button
                  key={`jobType-${idx}`}
                  variant="outline"
                  onClick={() => onFilterClick("type", jobType.value)}
                  className={cn(
                    jobType.value === searchParams.get("type")
                      ? "bg-accent"
                      : ""
                  )}
                >
                  {jobType.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((locationType, idx) => (
                <Button
                  key={`locationType-${idx}`}
                  variant="outline"
                  onClick={() => onFilterClick("location", locationType.value)}
                  className={cn(
                    locationType.value === searchParams.get("location")
                      ? "bg-accent"
                      : ""
                  )}
                >
                  {locationType.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Salary Range
            </h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGES.map((salaryRange, idx) => (
                <Button
                  key={`salaryRange-${idx}`}
                  variant="outline"
                  onClick={() => onFilterClick("salary", salaryRange)}
                  className={cn(
                    salaryRange === searchParams.get("salary")
                      ? "bg-accent"
                      : ""
                  )}
                >
                  {salaryRange}
                </Button>
              ))}
            </div>
          </div>
          <Button onClick={onClearAllClick} className="w-1/3">
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
