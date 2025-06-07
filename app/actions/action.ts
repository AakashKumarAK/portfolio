"use server"

import { z } from "zod"

// Define the schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extract form data
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  }

  // Validate the form data
  const validatedFields = contactSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, subject, message } = validatedFields.data

  try {
    // Here you would typically send an email using a service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - EmailJS (client-side option)

    // For now, we'll simulate sending an email
    // In a real implementation, you'd send an email to aakashkumar897340@gmail.com

    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'aakashkumar897340@gmail.com',
      from: 'noreply@yourportfolio.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })
    */

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact me directly.",
    }
  }
}
