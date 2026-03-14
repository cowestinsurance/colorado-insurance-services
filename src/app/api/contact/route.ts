import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // For now, log the submission. In production, integrate with
    // Resend, InsuredMine, or another email service.
    console.log("Contact form submission:", { name, email, phone, message });

    // TODO: Send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@coloradoinsuranceservices.com',
    //   to: 'info@coloradoinsuranceservices.com',
    //   subject: `New Contact Form: ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //          <p><strong>Message:</strong> ${message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
