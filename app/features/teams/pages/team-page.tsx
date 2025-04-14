import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/team-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { data, Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { z } from "zod";
import { getTeamById } from "../queries";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  teamId: z.coerce.number().gte(1),
});

export const meta: Route.MetaFunction = () => {
  return [{ title: "Team | wemake" }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invliad_team_id", error_message: "Invalid teamId" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const team = await getTeamById(client, { teamId: parsedData.teamId });
  return { team };
};

export default function TeamPage({ loaderData }: Route.ComponentProps) {
  const team = loaderData.team;
  return (
    <div className="space-y-20">
      <Hero title={`Join ${team.team_leader.name}'s Team`} />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            { title: "Product name", value: team.product_name },
            { title: "Stage", value: team.product_stage },
            { title: "Team size", value: team.team_size },
            { title: "Available equity", value: team.equity_split },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl capitalize">
                  {item.value}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-bold text-2xl">
                <ul className="text-lg list-disc list-inside">
                  {team.roles.split(",").map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>{team.product_description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-12">
              <AvatarFallback>
                {team.team_leader.name[0].toUpperCase()}
              </AvatarFallback>
              {team.team_leader.avatar ? (
                <AvatarImage src={team.team_leader.avatar} />
              ) : null}
            </Avatar>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium">{team.team_leader.name}</h4>
              <Badge variant="secondary">{team.team_leader.role}</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              id="introduction"
              name="introduction"
              label="Introduce yourself"
              description="Tell us about yourself"
              type="text"
              required
              textArea
              placeholder="i.e. I'm a React Developer with 3 years of experience"
            />
            <Button type="submit" className="w-full">
              Get in touch
            </Button>
          </Form>
        </aside>
      </div>
    </div>
  );
}
