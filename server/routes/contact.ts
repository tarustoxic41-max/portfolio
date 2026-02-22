import { RequestHandler } from "express";
import { ContactRequest, ContactResponse } from "@shared/api";

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body as ContactRequest;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Rate limiting and spam protection would normally be here
    // reCAPTCHA verification would also be here

    console.log(`New contact message from ${name} (${email}): ${subject} - ${message}`);

    // Simulate email delivery logic
    // In a real app, you'd use Nodemailer or an API like SendGrid/EmailJS here
    // with environment variables like REPLACE_ENV.EMAIL_SERVICE_KEY

    // Success response
    const response: ContactResponse = {
      success: true,
      message: "Message sent successfully 🚀 I’ll get back to you soon.",
    };

    res.json(response);
  } catch (error) {
    console.error("Error handling contact form:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
};
