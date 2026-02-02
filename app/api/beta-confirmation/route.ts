import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { email, name } = data;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Send the Beta Confirmation Email
        console.log("Processing beta confirmation for:", email);
        const { data: emailData, error: resendError } = await resend.emails.send({
            from: 'Spontane <hello@spontane.quest>',
            to: email,
            subject: 'You\'re In! Welcome to the Spontane Beta 🚀',
            replyTo: 'hello@spontane.quest',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a; background-color: #ffffff; border: 2px solid #fb8c00; border-radius: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <span style="background: #fb8c00; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Beta Explorer Confirmed</span>
                        <h1 style="color: #fb8c00; font-size: 32px; font-weight: 700; margin: 15px 0 0 0;">Spontane</h1>
                    </div>
                    
                    <h2 style="font-size: 24px; color: #333; text-align: center;">Pack your bags, ${name || 'Explorer'}!</h2>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #444; text-align: center;">
                        We received your beta application and we're excited to have you as one of our very first "Spontane Explorers." 
                    </p>

                    <div style="background: #2D3436; color: white; padding: 30px; border-radius: 16px; margin: 35px 0; text-align: center;">
                        <h3 style="margin-top: 0; font-size: 20px; color: #fb8c00;">What Happens Next?</h3>
                        <ul style="text-align: left; display: inline-block; padding: 0; list-style: none; margin: 15px 0;">
                            <li style="margin-bottom: 10px;">✨ <b>Exclusive Access:</b> You'll be the first to receive the app download link.</li>
                            <li style="margin-bottom: 10px;">🛠️ <b>Shape the Product:</b> Your feedback will directly influence new features.</li>
                            <li>🎁 <b>Early Member Perks:</b> Special rewards for our initial testing group.</li>
                        </ul>
                    </div>

                    <p style="font-size: 16px; line-height: 1.6; color: #444; text-align: center;">
                        Keep a close eye on your inbox. We'll be sending out the first round of invites very soon.
                    </p>

                    <div style="text-align: center; margin-top: 40px;">
                        <p style="font-size: 16px; font-weight: 600; color: #333; margin-bottom: 5px;">See you on the road,</p>
                        <p style="color: #fb8c00; font-weight: bold; font-size: 18px; margin: 0;">Team Spontane</p>
                    </div>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 40px 0;" />
                    
                    <div style="text-align: center;">
                        <p style="font-size: 12px; color: #999;">
                            © ${new Date().getFullYear()} Spontane. You are receiving this because you expressed interest in our beta program.
                        </p>
                    </div>
                </div>
            `
        });

        if (resendError) {
            console.error("Resend Beta Error:", resendError);
            return NextResponse.json({ error: resendError.message }, { status: 500 });
        }

        console.log("Resend Beta Success:", emailData);
        return NextResponse.json({ success: true, message: "Beta confirmation email sent." });
    } catch (error: any) {
        console.error("Beta Server Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
