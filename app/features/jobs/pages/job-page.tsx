import type { Route } from "./+types/job-page";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { DotIcon } from "lucide-react";
import { getJobById } from "../queries";
import { z } from "zod";
import { data } from "react-router";
import { DateTime } from "luxon";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  jobId: z.coerce.number().gte(1),
});

export const meta: Route.MetaFunction = ({ data }) => {
  return [
    {
      title: `${data.job.position} @ ${data.job.company_name} | wemake`,
    },
  ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_job_id", error_message: "Invalid jobID" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const job = await getJobById(client, { jobId: parsedData.jobId });
  return { job };
};

export default function JobPage({ loaderData }: Route.ComponentProps) {
  const job = loaderData.job;
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 gap-20 items-start -mt-20">
        <div className="col-span-4 space-y-10">
          <div>
            <div className="size-40 bg-white rounded-full overflow-hidden relative left-10">
              <img
                src={job.company_logo_url}
                alt="Logo img"
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold">{job.position}</h1>
            <h4 className="text-lg text-muted-foreground">
              {job.company_name}
            </h4>
          </div>
          <div className="flex gap-2 capitalize">
            <Badge variant="secondary">{job.job_type}</Badge>
            <Badge variant="secondary">{job.location_type}</Badge>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Overview</h4>
            <p className="text-lg">{job.overview}</p>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Responsibilities</h4>
            <ul className="text-lg list-disc list-inside">
              {job.responsibilities.split(",").map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Qualifications</h4>
            <ul className="text-lg list-disc list-inside">
              {job.qualifications.split(",").map((qualification, idx) => (
                <li key={idx}>{qualification}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Benefits</h4>
            <ul className="text-lg list-disc list-inside">
              {job.benefits.split(",").map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Skills</h4>
            <ul className="text-lg list-disc list-inside">
              {job.skills.split(",").map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 space-y-5 mt-32 sticky top-20 p-6 border rounded-lg">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Avg. Salary</span>
            <span className="text-2xl font-medium">{job.salary_range}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-2xl font-medium capitalize">
              {job.location_type}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Type</span>
            <span className="text-2xl font-medium capitalize">
              {job.job_type}
            </span>
          </div>
          <div className="flex">
            <span className="text-sm text-muted-foreground">
              Posted {DateTime.fromISO(job.created_at).toRelative()}
            </span>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">395 views</span>
          </div>
          <Button className="w-full">Apply now</Button>
        </div>
      </div>
    </div>
  );
}
