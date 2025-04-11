import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import { useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function JobsPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="space-y-20">
      <Hero title="Jobs" description="Companies looking for makers" />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5 ">
          {Array.from({ length: 100 }).map((_, idx) => (
            <JobCard
              key={`jobId-${idx}`}
              id={String(idx)}
              company="Meta"
              companyLogoUrl="https://github.com/facebook.png"
              companyHq="Houston, TX"
              postedAt="12 hours ago"
              title="Software Engineer"
              employmentType="Full-time"
              positionLocation="Remote"
              salary="$100,000 - $120,000"
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
        </div>
      </div>
    </div>
  );
}
