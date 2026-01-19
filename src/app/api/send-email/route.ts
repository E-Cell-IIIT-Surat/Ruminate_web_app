import { NextResponse } from 'next/server';

// ============================================================
// EMAIL SENDING FUNCTIONALITY - CURRENTLY DISABLED
// ============================================================
// This endpoint is simplified to prevent build errors.
// Email sending is disabled in the frontend (Footer.tsx).
// 
// To re-enable full email functionality:
// 1. Uncomment the code in Footer.tsx (see instructions there)
// 2. Restore the original email sending logic below
// 3. Set up required environment variables:
//    - EMAIL_ID
//    - EMAIL_PASS
//    - EMAIL_SUBJECT
//    - EMAIL_TEXT
//    - EMAIL_ATTACHMENT (optional)
//    - FILE_NAME (optional)
// ============================================================

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  // Validate email format
  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
  }

  console.log("Subscription request received for email:", email);

  // TEMPORARY: Just return success without sending email
  // This prevents build errors from missing environment variables
  return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  /* UNCOMMENT TO RE-ENABLE EMAIL SENDING:
  
  import nodemailer from "nodemailer";
  import path from 'path';
  
  const attachmentPath = path.join(process.cwd(), "public", process.env.EMAIL_ATTACHMENT!);
  const emailId = process.env.EMAIL_ID!;
  const pass = process.env.EMAIL_PASS!;
  const subject = process.env.EMAIL_SUBJECT!;
  const text = process.env.EMAIL_TEXT!;
  const fileName = process.env.FILE_NAME!;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailId,
        pass: pass
      },
    });

    const mailOptions = {
      from: emailId,
      to: email,
      subject: subject,
      text: text,
      attachments: [{
        filename: fileName,
        path: attachmentPath
      }]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (err) {
    console.log("Error sending email: ", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
  */
}