import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface BookDemoPayload {
  firstName: string;
  lastName: string;
  email: string;
  labName: string;
  phone?: string;
  role?: string;
  accounts?: string;
  message?: string;
}

const DEFAULT_RECIPIENTS = [
  'dentalpulse2026@gmail.com',
  'akash.manchanda@vuilive.com',
];

export async function POST(request: Request) {
  try {
    const body: BookDemoPayload = await request.json();
    const { firstName, lastName, email, labName, phone, role, accounts, message } = body;

    // Validate required fields
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !labName?.trim()) {
      return NextResponse.json(
        { error: 'Please provide all required fields: first name, last name, email, and lab name.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please check RESEND_API_KEY.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Resolve recipient list: use DEMO_NOTIFICATION_EMAIL if defined, otherwise default to user's specified emails
    const envRecipients = process.env.DEMO_NOTIFICATION_EMAIL
      ? process.env.DEMO_NOTIFICATION_EMAIL.split(',').map((e) => e.trim()).filter(Boolean)
      : [];
    const recipients = envRecipients.length > 0 ? envRecipients : DEFAULT_RECIPIENTS;

    // From address: must be from a verified domain in Resend
    // e.g. "DentalPulse <demo@dentalpulseai.com>" or "DentalPulse <notifications@yourverifieddomain.com>"
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'DentalPulse <onboarding@resend.dev>';

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const subject = `New Demo Request: ${fullName} - ${labName.trim()}`;
    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const plainText = `
New Demo Request Submitted:
------------------------------------------
Name: ${fullName}
Email: ${email.trim()}
Lab Name: ${labName.trim()}
Phone: ${phone?.trim() || 'Not provided'}
Role: ${role || 'Not specified'}
Active Accounts: ${accounts || 'Not specified'}
Goals / Notes: ${message?.trim() || 'None provided'}
Date (UTC): ${submissionDate}
------------------------------------------
Reply directly to this email to respond to ${fullName}.
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0d0d0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #161616; border: 1px solid #282828; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
    
    <!-- Header -->
    <div style="padding: 24px 32px; background: linear-gradient(135deg, #111111 0%, #1c1c1c 100%); border-bottom: 1px solid #282828;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <span style="font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
          Dental<span style="color: #12F095;">Pulse</span>
        </span>
        <span style="display: inline-block; margin-left:20px; padding: 4px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background-color: rgba(18, 240, 149, 0.15); color: #12F095; border: 1px solid rgba(18, 240, 149, 0.3); border-radius: 9999px;">
          New Demo Lead
        </span>
      </div>
      <h1 style="margin: 16px 0 0 0; font-size: 22px; font-weight: 700; color: #ffffff;">
        ${fullName} from ${labName.trim()}
      </h1>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #888888;">
        Submitted on ${submissionDate} (UTC)
      </p>
    </div>

    <!-- Lead Info Table -->
    <div style="padding: 28px 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; width: 140px; font-weight: 600;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #ffffff; font-weight: 600;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; font-weight: 600;">Work Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #12F095;">
              <a href="mailto:${email.trim()}" style="color: #12F095; text-decoration: none; font-weight: 600;">${email.trim()}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; font-weight: 600;">Lab Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #ffffff; font-weight: 600;">${labName.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; font-weight: 600;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #ffffff;">
              ${phone?.trim() ? `<a href="tel:${phone.trim()}" style="color: #ffffff; text-decoration: none;">${phone.trim()}</a>` : '<span style="color: #666666;">Not provided</span>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; font-weight: 600;">Role</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #ffffff;">${role || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 13px; color: #888888; font-weight: 600;">Active Accounts</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #222222; font-size: 15px; color: #ffffff;">${accounts || 'Not specified'}</td>
          </tr>
        </tbody>
      </table>

      <!-- Notes / Goals section -->
      <div style="margin-top: 24px; padding: 16px; background-color: #0f0f0f; border: 1px solid #242424; border-radius: 12px;">
        <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #888888; margin-bottom: 8px;">
          What would you like to improve?
        </div>
        <div style="font-size: 14px; line-height: 1.5; color: #dddddd; white-space: pre-wrap;">
          ${message?.trim() ? message.trim() : '<em style="color: #666666;">No additional goals or notes provided.</em>'}
        </div>
      </div>

      <!-- Quick Action CTA -->
      <div style="margin-top: 28px; text-align: center;">
        <a href="mailto:${email.trim()}?subject=Re:%20DentalPulse%20Demo%20Walkthrough"
           style="display: inline-block; padding: 13px 28px; background-color: #12F095; color: #0A0A0A; text-decoration: none; font-weight: 800; font-size: 14px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(18, 240, 149, 0.35);">
          Reply to ${firstName.trim()} &rarr;
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding: 16px 32px; background-color: #111111; border-top: 1px solid #222222; text-align: center; font-size: 12px; color: #666666;">
      DentalPulse Automated Lead Notification &bull; Reply-To set to ${email.trim()}
    </div>
  </div>
</body>
</html>
`.trim();

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: recipients,
      replyTo: email.trim(),
      subject,
      text: plainText,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API returned an error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send demo notification email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request sent successfully',
      id: data?.id,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error';
    console.error('Error handling demo request submission:', err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

