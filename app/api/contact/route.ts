import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with our API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the shape of our form data using TypeScript
    interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    }

    // Server-side validation function
    function validateFormData(data: ContactFormData): string | null {
    // Check if all fields exist and are not empty
        if (!data.name || data.name.trim().length === 0) {
            return 'Name is required';
        }
        // Name must be at least 2 characters
        if (data.name.trim().length < 3) {
            return 'Name must be at least 3 characters';
        }
        // Email must exist
        if (!data.email || data.email.trim().length === 0) {
            return 'Email is required';
        }
        // Email format check using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return 'Please provide a valid email address';
        }
        // Subject must exist
        if (!data.subject || data.subject.trim().length === 0) {
            return 'Subject is required';
        }
        // Message must exist and be at least 10 characters
        if (!data.message || data.message.trim().length < 10) {
            return 'Message must be at least 10 characters';
        }
        // Message cannot exceed 1000 characters
        if (data.message.trim()) {
            return 'Message must be less than 1000 characters';
        }
        // If everything passes, return null (no error)
        return null;
    }



    // This handles POST requests to /api/contact
    export async function POST(request: Request) {
    try {
        // Parse the JSON body from the frontend
        const body: ContactFormData = await request.json();

        // Run server-side validation
        const validationError = validateFormData(body);
        if (validationError) {
        // Return 400 (Bad Request) if validation fails
        return NextResponse.json(
            { success: false, error: validationError },
            { status: 400 }
        );
        }

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
        // FROM: Must be verified in Resend OR use onboarding@resend.dev for testing
        from: 'onboarding@resend.dev',
        // TO: Your email address (where you receive contact messages)
        to: ['e.awetobi@gmail.com'],
        // Email subject line
        subject: `Portfolio Contact: ${body.subject}`,
        // HTML email body (beautiful formatting!)
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
                New Contact Message
            </h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${body.name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> ${body.email}</p>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${body.subject}</p>
            </div>
            <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${body.message}</p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
                This email was sent from your portfolio contact form.
            </p>
            </div>
        `,
        });

        // If Resend returns an error
        if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
        }

        // SUCCESS! Email was sent
        return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
        );

    } catch (error) {
        // Catch any unexpected errors
        console.error('Contact API error:', error);
        return NextResponse.json(
        { success: false, error: 'Something went wrong. Please try again.' },
        { status: 500 }
        );
    }
    }