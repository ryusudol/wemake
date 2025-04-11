import { SendIcon } from "lucide-react";
import { Form } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { MessageBubble } from "../components/message-bubble";

export default function MessagePage() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle>Steve Jobs</CardTitle>
            <CardDescription>2 days ago</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="py-10 overflow-scroll flex flex-col justify-start h-full">
        {Array.from({ length: 20 }).map((_, idx) => (
          <MessageBubble
            avatarUrl="https://github.com/shadcn.png"
            avatarFallback="S"
            content="this is a message from steve jobs in iheaven, make sure to reply because if you don't, you will regret!"
            isCurrentUser={idx % 2 === 0}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <Form className="relative flex justify-end items-center">
            <Textarea
              placeholder="Write a message..."
              rows={2}
              className="resize-none"
            />
            <Button type="submit" size="icon" className="absolute right-2">
              <SendIcon className="size-4" />
            </Button>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
}
