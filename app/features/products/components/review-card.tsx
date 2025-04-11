import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface ReviewCardProps {
  name: string;
  username: string;
  avatarSrc?: string;
  avatarFallback: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  name,
  username,
  avatarSrc,
  avatarFallback,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          {avatarSrc && <AvatarImage src={avatarSrc} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, idx) => (
          <StarIcon key={idx} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{postedAt}</span>
    </div>
  );
}
