import InputPair from "~/common/components/input-pair";
import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-product-page";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import React, { useState } from "react";
import { Button } from "~/common/components/ui/button";
import { PRODUCT_CATEGORIES } from "../constant";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit products | wemake" },
    { name: "description", content: "Submit your products on our community" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit Your Product"
        description="Share your product with our community"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name of your product"
          />
          <InputPair
            label="Tagline"
            description="60 characters of less"
            id="tagline"
            name="tagline"
            type="text"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            id="url"
            name="url"
            type="url"
            required
            placeholder="https://example.com"
          />
          <InputPair
            label="Description"
            description="A detailed description of your product"
            id="description"
            name="description"
            required
            placeholder="A detailed description of your product"
            textArea
          />
          <SelectPair
            label="Category"
            description="The category of your product"
            name="category"
            required
            placeholder="Select a category"
            options={PRODUCT_CATEGORIES}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {icon && (
              <img
                src={icon}
                alt="Icon Img"
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <Label className="flex flex-col items-start gap-1">
            Icon
            <small className="text-muted-foreground">
              This is the icon of your product.
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
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
      </Form>
    </div>
  );
}
