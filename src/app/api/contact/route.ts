import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, interest, message, formType } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (formType === "contact" && !message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    const subject =
      formType === "webinar"
        ? `Webinar Registration: ${fullName || "Unknown"}`.trim()
        : `Website Inquiry: ${interest || "General"} - ${fullName || "Unknown"}`.trim();

    const htmlBody = `
      <h2>${formType === "webinar" ? "Webinar Registration" : "Contact Form Submission"}</h2>
      <p><strong>Name:</strong> ${fullName || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${interest ? `<p><strong>Interest:</strong> ${interest}</p>` : ""}
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
      <hr>
      <p><small>Sent from raiiz.com contact form</small></p>
    `;

    if (resend) {
      await resend.emails.send({
        from: "RAIIZ Website <onboarding@resend.dev>",
        to: "info@raiiz.com",
        replyTo: email,
        subject,
        html: htmlBody,
      });
    } else {
      // Log submission in development when no API key is configured
      console.log("────────────────────────────────────────");
      console.log("Form submission (no RESEND_API_KEY set):");
      console.log("Subject:", subject);
      console.log("From:", email);
      console.log("Interest:", interest || "N/A");
      console.log("Message:", message || "N/A");
      console.log("────────────────────────────────────────");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
