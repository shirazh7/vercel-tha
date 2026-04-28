// Root redirects to /chat rather than rendering a landing page. For an
// internal tool, a marketing page adds no value — authenticated users
// should land directly in the primary workflow. A landing page would make
// sense in a B2B SaaS product but not for an enterprise knowledge assistant.
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/chat");
}
