import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, interest, message, formType } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (formType === "contact" && !message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    const subject =
      formType === "webinar"
        ? `Webinar Registration: ${fullName || "Unknown"}`
        : `Website Inquiry: ${interest || "General"} — ${fullName || "Unknown"}`;

    // Priority 1: Resend (if RESEND_API_KEY is set in Vercel env vars)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "RAIIZ Website <onboarding@resend.dev>",
        to: "info@raiiz.com",
        replyTo: email,
        subject,
        html: `
          <h2>${formType === "webinar" ? "Webinar Registration" : "Contact Form Submission"}</h2>
          <p><strong>Name:</strong> ${fullName || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${interest ? `<p><strong>Interest:</strong> ${interest}</p>` : ""}
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ""}
          <hr><p><small>Sent from raiiz2.vercel.app</small></p>
        `,
      });
      return NextResponse.json({ success: true });
    }

    // Priority 2: FormSubmit.co — free, zero config, emails info@raiiz.com directly
    // Note: First submission triggers a one-time verification email to info@raiiz.com
    await fetch("https://formsubmit.co/ajax/info@raiiz.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: subject,
        name: fullName || "Website Visitor",
        email,
        interest: interest || "Not specified",
        message: message || `Webinar registration from ${email}`,
        _template: "table",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
