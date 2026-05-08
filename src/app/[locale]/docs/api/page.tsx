import { redirect } from "next/navigation";

// API documentation is canonical at /docs/api.
// Both /fr/docs/api and /en/docs/api redirect to /docs/api.
export default function LocalizedApiDocsRedirect() {
  redirect("/docs/api");
}
