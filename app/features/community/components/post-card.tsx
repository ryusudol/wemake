import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { ChevronUpIcon, DotIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import { DateTime } from "luxon";

interface PostCardProps {
  postId: number;
  authorName: string;
  authorAvatarUrl: string | null;
  title: string;
  category: string;
  postedAt: string;
  expanded?: boolean;
  votesCount?: number;
}

export function PostCard({
  postId,
  authorAvatarUrl,
  title,
  authorName,
  category,
  postedAt,
  expanded = false,
  votesCount = 0,
}: PostCardProps) {
  const postLink = `/community/${postId}`;
  return (
    <Link to={postLink} className="block">
      <Card
        className={cn(
          "bg-transparent hover:bg-card/50 transition-colors",
          expanded && "flex flex-row items-center justify-between text-nowrap"
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={authorAvatarUrl ?? undefined} />
            <AvatarFallback>{authorName[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{authorName} on</span>
              <span>{category}</span>
              <DotIcon className="w-4 h-4" />
              <span>{DateTime.fromISO(postedAt).toRelative()}</span>
            </div>
          </div>
        </CardHeader>
        {expanded ? (
          <CardFooter className="flex justify-end py-0">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{votesCount}</span>
            </Button>
          </CardFooter>
        ) : (
          <CardFooter className="flex justify-end">
            <Button variant="link">Reply &rarr;</Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
