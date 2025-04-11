import { redirect } from "react-router";
import type { Route } from "./+types/profile-page";

export function loader() {
  return redirect("/users/ryusudol");
}
