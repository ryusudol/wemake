import { data, Form, Link, NavLink, Outlet } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button, buttonVariants } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/profile-layout";
import { z } from "zod";
import { getUserProfile } from "../queries";
import { makeSSRClient } from "~/supa-client";

const paramsSchema = z.object({
  username: z.string(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid_username", error_message: "Invalid username" },
      { status: 400 }
    );
  }
  const { client } = makeSSRClient(request);
  const user = await getUserProfile(client, { username: parsedData.username });
  return { user };
};

export default function ProfileLayout({ loaderData }: Route.ComponentProps) {
  const user = loaderData.user;
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <Avatar className="size-40">
          {user.avatar ? <AvatarImage src={user.avatar} /> : null}
          <AvatarFallback className="text-2xl">
            {user.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-5">
          <div className="flex gap-2">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <Button variant="outline" asChild>
              <Link to="/my/settings">Edit profile</Link>
            </Button>
            <Button variant="secondary">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                </DialogHeader>
                <DialogDescription className="space-y-4">
                  <span className="text-sm text-muted-foreground block">
                    Send a message to {user.name}
                  </span>
                  <Form className="space-y-4">
                    <Textarea
                      className="resize-none"
                      placeholder="Message"
                      rows={4}
                    />
                    <Button type="submit">Send</Button>
                  </Form>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {user.username}
            </span>
            <Badge variant="secondary">{user.role}</Badge>
            <Badge variant="secondary">100 followers</Badge>
            <Badge variant="secondary">100 following</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {[
          { label: "About", to: `/users/${user.username}` },
          { label: "Products", to: `/users/${user.username}/products` },
          { label: "Posts", to: `/users/${user.username}/posts` },
        ].map((item, idx) => (
          <NavLink
            end
            key={idx}
            className={(props) =>
              cn(
                buttonVariants({ variant: "outline" }),
                props.isActive && "bg-accent text-foreground"
              )
            }
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="max-w-screen-md">
        <Outlet context={{ headline: user.headline, bio: user.bio }} />
      </div>
    </div>
  );
}
