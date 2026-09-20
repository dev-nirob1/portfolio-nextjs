import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "me.nirob01@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
    <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; border: 1px solid #D9D5C8; border-radius: 4px;">
      <p style="font-size: 12px; color: #726F63; margin: 0 0 16px;">New message from your portfolio</p>
      <p style="font-size: 15px; margin: 0 0 8px;"><strong>${name}</strong></p>
      <p style="font-size: 13px; color: #726F63; margin: 0 0 20px;">${email}</p>
      <p style="font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
    </div>
  `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}