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
                        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a; background-color: #ffffff;">
                            <div style="text-align: center; margin-bottom: 30px;">
                                <h1 style="color: #fb8c00; font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">SPONTANE</h1>
                                <p style="color: #666; font-size: 14px; margin-top: 5px;">The future of travel</p>
                            </div>
                            
                            <h2 style="font-size: 22px; color: #333; margin-bottom: 20px;">Welcome to the journey, ${data.name || 'Explorer'}!</h2>
                            
                            <p style="font-size: 16px; line-height: 1.6; color: #444;">
                                We're thrilled to have you on the waitlist. We're building Spontane for those who find magic in traveling, and we'd love for you to be part of the early group that brings it to life.
                            </p>

                            <div style="background: linear-gradient(135deg, #fff3e0 0%, #fdf2e9 100%); padding: 30px; border-radius: 16px; margin: 35px 0; border: 1px solid #ffe0b2; text-align: center;">
                                <h3 style="margin-top: 0; font-size: 18px; color: #e65100;">📝 Quick Survey & Beta Testing</h3>
                                <p style="font-size: 15px; color: #5d4037;">Help us build the perfect travel app. It only takes 2 minutes to share your thoughts.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVm3UqZkYDG9EEgGQhBUa5dgCa3LwERQDQ14A6rxzTI4yXZg/viewform" 
                                   style="display: inline-block; background: #fb8c00; color: white; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-weight: 600; margin-top: 15px; box-shadow: 0 4px 12px rgba(251, 140, 0, 0.2);">
                                   Take Quick Survey
                                </a>
                            </div>

                            <p style="font-size: 16px; line-height: 1.6; color: #444;">
                                We'll be in touch as soon as a spot opens up. In the meantime, happy travels!
                            </p>

                            <p style="margin-top: 40px; font-size: 16px; font-weight: 600; color: #333;">
                                Cheers,<br/>
                                <span style="color: #fb8c00;">Team Spontane</span>
                            </p>
                            
                            <hr style="border: 0; border-top: 1px dashed #eee; margin: 40px 0;" />
                            
                            <div style="text-align: center;">
                                <p style="font-size: 12px; color: #999;">
                                    You're receiving this because you signed up at <a href="https://spontane.quest" style="color: #fb8c00; text-decoration: none;">spontane.quest</a>
                                </p>
                                <p style="font-size: 12px; color: #999; margin-top: 10px;">
                                    © ${new Date().getFullYear()} Spontane. All rights reserved.
                                </p>
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
