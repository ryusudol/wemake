import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import type { Route } from "./+types/post-page";
import { data, Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { Textarea } from "~/common/components/ui/textarea";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Reply } from "~/features/community/components/reply";
import { z } from "zod";
import { getPostById, getReplies } from "../queries";
import { DateTime } from "luxon";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  postId: z.coerce.number().gte(1),
});

export const meta: Route.MetaFunction = () => {
  return [{ title: "Post | WeMake" }];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_post_id", error_message: "Invalid postId" },
      { status: 400 }
    );
  }
  const { client, headers } = makeSSRClient(request);
  const post = await getPostById(client, { postId: parsedData.postId });
  const replies = await getReplies(client, { postId: parsedData.postId });
  return { post, replies };
};

export default function PostPage({ loaderData }: Route.ComponentProps) {
  const post = loaderData.post;
  const replies = loaderData.replies;
  return (
    <div className="space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/community">Community</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/community?topic=${post.topic_slug}`}>
                {post.topic_name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/community/${post.post_id}`}>{post.title}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 space-y-10">
          <div className="flex w-full items-start gap-10">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{post.upvotes}</span>
            </Button>
            <div className="space-y-20">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author_name}</span>
                  <DotIcon className="size-5" />
                  <span>{DateTime.fromISO(post.created_at).toRelative()}</span>
                  <DotIcon className="size-5" />
                  <span>
                    {post.reply_count}{" "}
                    {post.reply_count <= 1 ? "reply" : "replies"}
                  </span>
                </div>
                <p className="text-muted-foreground w-3/4">{post.content}</p>
              </div>
              <Form className="flex items-start gap-5 w-3/4">
                <Avatar className="size-12">
                  <AvatarFallback>
                    {post.author_name[0].toUpperCase()}
                  </AvatarFallback>
                  {post.author_avatar ? (
                    <AvatarImage src={post.author_avatar} />
                  ) : null}
                </Avatar>
                <div className="flex flex-col gap-5 items-end w-full">
                  <Textarea
                    placeholder="Write a reply"
                    className="w-full resize-none min-h-28"
                    rows={8}
                  />
                  <Button>Reply</Button>
                </div>
              </Form>
              <div className="space-y-10">
                <h4 className="font-semibold">
                  {post.reply_count}{" "}
                  {post.reply_count <= 1 ? "Reply" : "Replies"}
                </h4>
                <div className="flex flex-col gap-5">
                  {replies.map((reply) => (
                    <Reply
                      username={reply.user.username}
                      avatarUrl={reply.user.avatar}
                      createdAt={reply.created_at}
                      content={reply.reply}
                      topLevel={true}
                      replies={reply.post_replies}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-12">
              <AvatarFallback>
                {post.author_name[0].toUpperCase()}
              </AvatarFallback>
              {post.author_avatar ? (
                <AvatarImage src={post.author_avatar} />
              ) : null}
            </Avatar>
            <div className="flex flex-col items-start">
              <h4 className="text-lg font-medium">{post.author_name}</h4>
              <Badge variant="secondary" className="capitalize">
                {post.author_role}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <span>
              🎂 Joined {DateTime.fromISO(post.author_create_at).toRelative()}
            </span>
            <span>🚀 Launched {post.product_count} products</span>
          </div>
          <Button variant="outline" className="w-full">
            Follow
          </Button>
        </aside>
      </div>
    </div>
  );
}
