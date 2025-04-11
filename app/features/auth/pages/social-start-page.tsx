import { Link, useParams } from "react-router";
import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Login | WeMake` },
    {
      name: "description",
      content: `계정으로 WeMake에 로그인하세요`,
    },
  ];
};

export function Component() {
  const { provider } = useParams();

  return <div className="space-y-6"></div>;
}
