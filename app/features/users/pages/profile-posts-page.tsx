import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";
import { z } from "zod";
import { getUserPosts } from "../queries";
import { makeSSRClient } from "~/supa-client";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Posts | wemake" }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client, headers } = makeSSRClient(request);
  const posts = await getUserPosts(client, { username: params.username });
  return { posts };
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  const posts = loaderData.posts;
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <PostCard
          key={post.post_id}
          postId={post.post_id}
          authorName={post.author}
          authorAvatarUrl={post.author_avatar}
          title={post.title}
          category={post.topic}
          postedAt={post.created_at}
          expanded
        />
      ))}
    </div>
  );
}
