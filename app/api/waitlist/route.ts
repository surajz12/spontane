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
                const { data: emailData, error: resendError } = await resend.emails.send({
                    from: 'Spontane <onboarding@resend.dev>',
                    to: data.email,
                    subject: 'Welcome to Spontane - Your Journey Begins!',
                    html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
                            <h1 style="color: #fb8c00;">Welcome to the Journey, ${data.name || 'Explorer'}!</h1>
                            <p style="font-size: 16px; line-height: 1.6;">
                                We're thrilled to have you on the Spontane waitlist. We're building the future of spontaneous travel, 
                                and we want your help to get it right.
                            </p>
                            <div style="background: #fdf2e9; padding: 25px; border-radius: 12px; margin: 30px 0; border-left: 5px solid #fb8c00;">
                                <h2 style="margin-top: 0; font-size: 18px;">🚀 Join our Beta Testing Group</h2>
                                <p>Want to get your hands on the app before anyone else? We're looking for early explorers to test our latest features.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScWB0ntJPux-HMTqKkoR4dOVM5oMk1est8AT8DMHTUo/viewform" 
                                   style="display: inline-block; background: #fb8c00; color: white; padding: 12px 25px; text-decoration: none; border-radius: 30px; font-weight: bold; margin-top: 10px;">
                                   Apply for Beta Access
                                </a>
                            </div>
                            <p style="font-size: 14px; color: #666;">
                                Watch your inbox for the sunrise. We'll be in touch soon with more updates!
                            </p>
                            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
                            <p style="font-size: 12px; color: #999; text-align: center;">
                                © ${new Date().getFullYear()} Spontane Inc.
                            </p>
                        </div>
                    `
                });

                if (resendError) {
                    emailErrorMsg = resendError.message;
                } else {
                    emailSent = true;
                }
            } catch (err: any) {
                emailErrorMsg = `Resend Exception: ${err.message}`;
            }
        } else {
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
