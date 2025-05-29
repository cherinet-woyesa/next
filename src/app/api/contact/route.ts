import { NextResponse } from 'next/server';

// Declare nodemailer type
declare const nodemailer: any;
let transporter: any;

if (typeof window === 'undefined') {
  const nodemailer = require('nodemailer');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
} else {
  // Mock transporter for client-side
  transporter = {
    sendMail: () => Promise.resolve()
  };
}

export async function POST(request: Request) {
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
