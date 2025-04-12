import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/idea-page";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { getGptIdea } from "../queries";
import { DateTime } from "luxon";

export const meta: Route.MetaFunction = ({
  data: {
    idea: { gpt_idea_id },
  },
}: Route.MetaArgs) => {
  return [
    { title: `Idea ${gpt_idea_id} | wemake` },
    { name: "description", content: "Find ideas for your next project" },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { ideaId } = params;
  const idea = await getGptIdea(ideaId);
  return { idea };
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
  const idea = loaderData.idea;
  return (
    <div>
      <Hero title={`Idea #${idea.gpt_idea_id}`} />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">{idea.idea}</p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            <span>{idea.views}</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span>{DateTime.fromISO(idea.created_at).toRelative()}</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>{idea.likes}</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
