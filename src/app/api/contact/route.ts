import { NextResponse } from 'next/server';

// Declare nodemailer type
import nodemailer from 'nodemailer';

export async function POST(request: Request): Promise<Response> {
  try {
    const { name, email, message, projectType, urgency } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${projectType || 'General Inquiry'}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Urgency: ${urgency}
        Message: ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
