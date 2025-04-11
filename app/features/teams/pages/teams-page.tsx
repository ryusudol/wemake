import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Teams | wemake" }];
};

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" description="Find a team looking for a new member." />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <TeamCard
            key={`teamId-${idx}`}
            id={`teamId-${idx}`}
            leaderUsername="Suhyeon Yu"
            leaderAvatarUrl="https://github.com/ryusudol.png"
            leaderAvatarFallback="R"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
