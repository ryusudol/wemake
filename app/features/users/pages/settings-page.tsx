import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Input } from "~/common/components/ui/input";
import type { Route } from "./+types/settings-page";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Settings | wemake" }];
};

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Edit profile</h2>
          <Form className="w-1/2 flex flex-col gap-5">
            <InputPair
              id="name"
              name="name"
              label="Name"
              description="Your public name"
              required
              placeholder="Suhyeon Yu"
            />
            <SelectPair
              label="Role"
              description="What role do you identify the most with"
              name="role"
              placeholder="Select a role"
              options={[
                { label: "Developer", value: "developer" },
                { label: "Designer", value: "designer " },
                { label: "Product Manager", value: "product-manager" },
                { label: "Founder", value: "founder" },
                { label: "Other", value: "other" },
              ]}
            />
            <InputPair
              id="headline"
              name="headline"
              label="Headline"
              description="An introduction to your profile."
              required
              placeholder="Suhyeon Yu"
            />
            <InputPair
              id="bio"
              name="bio"
              label="Bio"
              description="Your public bio. It will be displayed on your profile page."
              required
              placeholder="Suhyeon Yu"
            />
            <Button className="w-full">Update profile</Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <Label className="flex flex-col items-start gap-1">
            Avatar
            <small className="text-muted-foreground">
              This is your public avatar.
            </small>
          </Label>
          <div className="space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar && (
                <img
                  src={avatar}
                  alt="Avatar Img"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <Input
              type="file"
              className="w-1/2"
              onChange={onChange}
              required
              name="avatar"
            />
            <div className="flex flex-col text-xs">
              <span className="text-muted-foreground">
                Recommended size: 128x128px
              </span>
              <span className="text-muted-foreground">
                Allowed formats: PNG, JPEG
              </span>
              <span className="text-muted-foreground">Max file size: 1MB</span>
            </div>
          </div>
          <Button className="w-full">Update avatar</Button>
        </aside>
      </div>
    </div>
  );
}
