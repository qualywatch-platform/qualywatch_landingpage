import { redirect } from "next/navigation";

// Privacy policy is canonical at /privacy (French legal text only).
// Both /fr/privacy and /en/privacy redirect to /privacy.
export default function LocalizedPrivacyRedirect() {
  redirect("/privacy");
}
