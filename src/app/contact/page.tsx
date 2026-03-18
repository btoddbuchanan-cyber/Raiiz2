import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact RAIIZ Innovations — Vancouver Construction Tech",
  description:
    "Contact RAIIZ Innovations in Vancouver, BC. Reach our team for platform inquiries, investment opportunities, media, or partnership discussions.",
};

export default function ContactPage() {
  return <ContactContent />;
}
