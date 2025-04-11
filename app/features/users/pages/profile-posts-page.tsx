import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Posts | wemake" }];
};

export default function ProfilePostsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <PostCard
          key={`postId: ${idx}`}
          postId={idx}
          authorAvatarUrl="https://github.com/ryusudol.png"
          title="What is the best productivity tool?"
          authorName="ryusudol"
          category="Productivity"
          postedAt="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}
