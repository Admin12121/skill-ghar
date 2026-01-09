import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Form: ${subject}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Skill Griha',
      text: `
Hello ${name},

Thank you for reaching out to us. We have received your message and will reach out soon to you.

Your submitted details:
Subject: ${subject}

Best regards,
Skill Griha Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Thank You for Contacting Skill Griha</h2>
          <p style="font-size: 16px; color: #555;">Hello <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #555;">Thank you for reaching out to us. We have received your message and <strong>will reach out soon to you</strong>.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your submitted details:</strong></p>
            <p>Subject: ${subject}</p>
          </div>
          <p style="font-size: 14px; color: #777; margin-top: 30px;">Best regards,<br><strong>Skill Griha Team</strong></p>
        </div>
      `,
    };
    
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
