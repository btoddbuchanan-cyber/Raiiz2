import type { Metadata } from "next";
import { WebinarContent } from "./WebinarContent";

export const metadata: Metadata = {
  title: "Register for a Webinar",
  description:
    "Register for an upcoming RAIIZ Innovations webinar to learn about our platform, investment opportunities, and the future of construction technology.",
};

export default function WebinarPage() {
  return <WebinarContent />;
}
