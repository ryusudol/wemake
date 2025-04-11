import { Form, Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  username: string;
  avatarUrl?: string;
  createdAt: string;
  content: string;
  topLevel: boolean;
}

export function Reply({
  username,
  avatarUrl,
  createdAt,
  content,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-12">
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={`/users/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-xs text-muted-foreground">{createdAt}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-12">
            <AvatarFallback>R</AvatarFallback>
            <AvatarImage src="https://github.com/ryusudol.png" />
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
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="Suhyeon"
            avatarUrl="https://github.com/ryusudol.png"
            createdAt="12 hours ago"
            content="I've been using Todoist for a while now, and it's really great. It's simple, easy to use, and has a lot of features."
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
