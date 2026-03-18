import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with RAIIZ Innovations — whether you're a homeowner, industry professional, investor, or media.",
};

export default function ContactPage() {
  return <ContactContent />;
}
