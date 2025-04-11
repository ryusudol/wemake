import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/login-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButton from "../components/auth-button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login | WeMake" }];
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Log in to your account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e. wemake@example.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </Form>
        <AuthButton />
      </div>
    </div>
  );
}
