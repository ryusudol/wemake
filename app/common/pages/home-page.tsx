import { Link, type MetaFunction } from "react-router";

import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => [
  { title: "Home | wemake" },
  { name: "description", content: "Welcome to wemake" },
];

export default function HomePage() {
  const product = {
    id: "productId",
    title: "Product Title",
    description: "Product Description",
    commentCount: 12,
    viewCount: 12,
    upvoteCount: 120,
  };
  const discussion = {
    postId: 1,
    authorName: "Suhyeon",
    authorAvatarSrc: "https://github.com/apple.png",
    authorAvatarFallback: "R",
    title: "What is the best productivity tool?",
    category: "Productivity",
    timestamp: "12 hours ago",
  };
  const idea = {
    id: "ideaId",
    title:
      "A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to mange the business.",
    viewCount: 123,
    timestamp: "12 hours ago",
    likeCount: 12,
  };
  const job = {
    id: "jobId",
    company: "Tesla",
    companyLogoUrl: "https://github.com/facebook.png",
    companyHq: "San Francisco, CA",
    postedAt: "12 hours ago",
    title: "Software Engineer",
    employmentType: "Full-time",
    positionLocation: "Remote",
    salary: "$100,000 - $120,000",
  };
  const team = {
    id: "teamId",
    leaderUsername: "ryusudol",
    leaderAvatarUrl: "https://github.com/ryusudol.png",
    leaderAvatarFallback: "R",
    positions: ["React Developer", "Backend Developer", "Product Manager"],
    projectDescription: "a new social media platform",
  };

  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, idx) => (
          <ProductCard
            key={`productId: ${idx}`}
            id={product.id}
            title={product.title}
            description={product.description}
            commentCount={product.commentCount}
            viewCount={product.viewCount}
            upvoteCount={product.upvoteCount}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The leatest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, idx) => (
          <PostCard
            key={`postId-${idx}`}
            postId={discussion.postId}
            authorAvatarUrl={discussion.authorAvatarSrc}
            title={discussion.title}
            authorName={discussion.authorName}
            category={discussion.category}
            postedAt={discussion.timestamp}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, idx) => (
          <IdeaCard
            key={`ideaId-${idx}`}
            id={idea.id}
            title={idea.title}
            viewCount={idea.viewCount}
            postedAt={idea.timestamp}
            likesCount={idea.likeCount}
            claimed={idx % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, idx) => (
          <JobCard
            key={`jobId-${idx}`}
            id={job.id}
            company={job.company}
            companyLogoUrl={job.companyLogoUrl}
            companyHq={job.companyHq}
            title={job.title}
            postedAt={job.postedAt}
            employmentType={job.employmentType}
            positionLocation={job.positionLocation}
            salary={job.salary}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, idx) => (
          <TeamCard
            key={`teamId-${idx}`}
            id={team.id}
            leaderUsername={team.leaderUsername}
            leaderAvatarUrl={team.leaderAvatarUrl}
            leaderAvatarFallback={team.leaderAvatarFallback}
            positions={team.positions}
            projectDescription={team.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}
