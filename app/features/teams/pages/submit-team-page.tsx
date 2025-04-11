import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-team-page";
import InputPair from "~/common/components/input-pair";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import SelectPair from "~/common/components/select-pair";
import { PRODUCT_STAGES } from "../constant";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Create Team | wemake" }];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Team"
        description="Create a team to find a team mate."
      />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            id="name"
            name="name"
            label="What is the name of your product?"
            description="(20 characters max)"
            maxLength={20}
            type="text"
            required
            placeholder="i.e. Doggy Social"
          />
          <SelectPair
            name="stage"
            label="What is the stage of your product?"
            description="Select the stage of yor product"
            required
            placeholder="Select the stage of your product"
            options={PRODUCT_STAGES}
          />
          <InputPair
            id="size"
            name="size"
            label="What is the size of your team?"
            description="(1-100)"
            max={100}
            min={1}
            type="number"
            required
          />
          <InputPair
            id="equity"
            name="equity"
            label="How much equity are you willing to give?"
            description="(each)"
            max={100}
            min={1}
            type="number"
            required
          />
          <InputPair
            id="roles"
            name="roles"
            label="What roles are you looking for?"
            description="(comma separated)"
            type="text"
            required
            placeholder="React Developer, Backend Developer, Product Manager"
          />
          <InputPair
            id="description"
            name="description"
            label="What is the description of your product?"
            description="(200 characters max)"
            maxLength={200}
            type="text"
            required
            textArea
            placeholder="i.e. We are building a new social media platform for dogs to connect with each other"
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}
