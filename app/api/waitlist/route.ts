import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from 'resend';

// Initializing Resend with the API Key from environment variables
// Triggering redeploy for environment variables sync
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const data = await req.json();

        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
            return NextResponse.json({ error: "Supabase URL is missing." }, { status: 500 });
        }

        if (!data.email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // 1. Save user to Supabase Waitlist
        const { error: supabaseError } = await supabase
            .from('waitlist')
            .insert([
                {
                    email: data.email,
                    name: data.name || "N/A",
                    trip_type: data.tripType || "N/A",
                }
            ]);

        const isDuplicate = supabaseError?.code === '23505';

        // IF there is a real database error, STOP and tell the user
        if (supabaseError && !isDuplicate) {
            return NextResponse.json(
                { error: `Supabase Error: ${supabaseError.message} (Code: ${supabaseError.code})` },
                { status: 500 }
            );
        }

        // 2. Send the Welcome Email via Resend
        let emailSent = false;
        let emailErrorMsg = null;

        if (process.env.RESEND_API_KEY) {
            try {
                console.log("Attempting to send email to:", data.email);
                const { data: emailData, error: resendError } = await resend.emails.send({
                    from: 'Spontane <hello@spontane.quest>',
                    to: data.email,
                    subject: 'Welcome to the Spontane Waitlist! 🌅',
                    replyTo: 'hello@spontane.quest',
                    html: `
                        <div style="font-family: sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
                            <p>Hi ${data.name || 'there'},</p>
                            
                            <p>Welcome to the journey! We're building <b>Spontane</b> for those who find magic in traveling, and we're thrilled to have you with us.</p>
                            
                            <p>Before we launch, we want to make sure we're building exactly what you need.</p>
                            
                            <p><b>Could you spare 2 minutes for a quick feedback survey?</b></p>
                            
                            <p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVm3UqZkYDG9EEgGQhBUa5dgCa3LwERQDQ14A6rxzTI4yXZg/viewform" style="color: #fb8c00; text-decoration: underline;">
                                    👉 Take the Quick Survey & Beta Sign-up
                                </a>
                            </p>
                            
                            <p>Your input will directly shape the app, and you'll get priority access to our upcoming Beta.</p>
                            
                            <p>Happy travels,</p>
                            
                            <p>
                                <strong>Team Spontane</strong><br/>
                                <a href="https://spontane.quest" style="color: #888; text-decoration: none; font-size: 14px;">spontane.quest</a>
                            </p>
                            
                            <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; font-size: 12px; color: #aaa;">
                                <p>You signed up for the waitlist at spontane.quest. Need help? Contact us at <a href="mailto:support@spontane.quest" style="color: #aaa; text-decoration: underline;">support@spontane.quest</a></p>
                            </div>
                        </div>
                    `
                });

                if (resendError) {
                    console.error("Resend Error:", resendError);
                    emailErrorMsg = resendError.message;
                } else {
                    console.log("Resend Success:", emailData);
                    emailSent = true;
                }
            } catch (err: any) {
                console.error("Resend Exception:", err);
                emailErrorMsg = `Resend Exception: ${err.message}`;
            }
        } else {
            console.error("Missing RESEND_API_KEY in process.env");
            emailErrorMsg = "RESEND_API_KEY is missing.";
        }

        return NextResponse.json({
            success: true,
            alreadyExists: isDuplicate,
            emailSent,
            emailStatus: emailSent ? "Sent" : "Failed",
            emailError: emailErrorMsg,
            debug: {
                url_configured: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
                db_success: !supabaseError || isDuplicate
            }
        });
    } catch (error: any) {
        return NextResponse.json({ error: `Server Crash: ${error.message}` }, { status: 500 });
    }
}
