import { IdeaCard } from "~/features/ideas/components/idea-card";

export default function DashboardIdeasPage() {
  return (
    <div className="space-y-10 h-full">
      <h1 className="text-2xl font-semibold mb-6">Claimed Ideas</h1>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <IdeaCard
            key={`ideaId-${idx}`}
            id={`ideaId-${idx}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to mange the business."
            viewCount={123}
            postedAt="12 hours ago"
            likesCount={12}
          />
        ))}
      </div>
    </div>
  );
}
