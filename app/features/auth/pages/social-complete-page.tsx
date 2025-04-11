import { Link, useParams } from "react-router";
import type { Route } from "./+types/social-complete-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Login | WeMake` },
    { name: "description", content: `계정 연결이 완료되었습니다` },
  ];
};

export function Component() {
  const { provider } = useParams();

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{provider} 로그인 완료</h1>
        <p className="text-gray-500">계정 연결이 완료되었습니다</p>
      </div>
      <div className="space-y-4">
        <div className="text-center text-sm">
          <p>
            <Link to="/" className="font-medium text-blue-600 hover:underline">
              메인 페이지로 이동
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
