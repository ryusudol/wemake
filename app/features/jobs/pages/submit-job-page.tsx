import { Form } from "react-router";
import type { Route } from "./+types/submit-job-page";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Job | wemake" },
    {
      name: "description",
      content: "Reach out to the best developers in the world",
    },
  ];
};

export default function SubmitJobPage() {
  return (
    <div>
      <Hero
        title="Post a Job"
        description="Reach out to the best developers in the world"
      />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            id="position"
            label="Position"
            description="(40 characters max)"
            name="position"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. Senior React Developer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="(400 characters max)"
            name="overview"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. We are looking for Senior React Developers"
            textArea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="(400 characters max, comma separated)"
            name="responsibilities"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. Implement new features, Maintain code quality, etc."
            textArea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="(400 characters max, comma separated)"
            name="qualifications"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. 3+ years of experience, Strong TypeScript skills, etc."
            textArea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="(400 characters max, comma separated)"
            name="benefits"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. Flexible working hours, Health insurance, etc."
            textArea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="(400 characters max, comma separated)"
            name="skills"
            maxLength={400}
            type="text"
            required
            placeholder="i.e. React, TypeScript, etc."
            textArea
          />
          <InputPair
            id="companyName"
            label="Company Name"
            description="(40 characters max)"
            name="companyName"
            maxLength={40}
            type="text"
            required
            placeholder="i.e. wemake"
          />
          <InputPair
            id="companyLogoURL"
            label="Company Logo URL"
            description="Enter your company logo URL"
            name="companyLogoURL"
            type="url"
            required
            placeholder="i.e. https://wemake.services/logo.png"
          />
          <InputPair
            id="companyLocation"
            label="Company Location"
            description="Enter your company location"
            name="companyLocation"
            type="text"
            required
            placeholder="i.e. Remote, New York, etc."
          />
          <InputPair
            id="applyURL"
            label="Apply URL"
            description="Enter the application URL"
            name="applyURL"
            type="url"
            required
            placeholder="i.e. https://wemake.services/apply"
          />
          <SelectPair
            label="Job Type"
            description="Select the type of job"
            name="jobType"
            required
            placeholder="Select the type of job"
            options={JOB_TYPES.map((jobType) => ({
              label: jobType.label,
              value: jobType.value,
            }))}
          />
          <SelectPair
            label="Location Type"
            description="Select the type of location"
            name="locationType"
            required
            placeholder="Select the type of location"
            options={LOCATION_TYPES.map((locationType) => ({
              label: locationType.label,
              value: locationType.value,
            }))}
          />
          <SelectPair
            label="Salary Range"
            description="Select the salary range of the job"
            name="salaryRange"
            required
            placeholder="Select the salary range of the job"
            options={SALARY_RANGES.map((salary) => ({
              label: salary,
              value: salary,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
