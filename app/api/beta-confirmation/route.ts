import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { email, name, betaInterest } = data;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        console.log(`Processing confirmation for: ${email}, Interest: ${betaInterest}`);

        let subject = "You're In! Welcome to the Spontane Beta 🚀";
        let htmlContent = "";

        // Check if user said YES (starts with 'y' or is boolean true)
        const interestStr = String(betaInterest).toLowerCase().trim();
        const isBetaUser = interestStr.startsWith('y') || interestStr === 'true' || betaInterest === true;

        if (isBetaUser) {
            // BETA CONFIRMATION EMAIL
            subject = "You're In! Welcome to the Spontane Beta 🚀";
            htmlContent = `
                <div style="font-family: sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
                    <p>Hi ${name || 'Explorer'},</p>
                    
                    <p>Pack your bags! We received your beta application and we're excited to have you as one of our very first "Spontane Explorers."</p>
                    
                    <p><b>What Happens Next?</b></p>
                    <ul>
                        <li>✨ <b>Exclusive Access:</b> You'll be the first to receive the app download link.</li>
                        <li>🛠️ <b>Shape the Product:</b> Your feedback will directly influence new features.</li>
                        <li>🎁 <b>Early Member Perks:</b> Special rewards for our initial testing group.</li>
                    </ul>

                    <p>Keep a close eye on your inbox. We'll be sending out invite links soon.</p>

                    <p>See you on the road,</p>
                    
                    <p>
                        <strong>Team Spontane</strong><br/>
                        <a href="https://spontane.quest" style="color: #888; text-decoration: none; font-size: 14px;">spontane.quest</a>
                    </p>
                    
                     <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; font-size: 12px; color: #aaa;">
                        <p>Need help? Contact us at <a href="mailto:hello@spontane.quest" style="color: #aaa; text-decoration: underline;">hello@spontane.quest</a></p>
                    </div>
                </div>
            `;
        } else {
            // SURVEY ONLY / NO BETA EMAIL
            subject = "Thanks for your feedback! 📝";
            htmlContent = `
                <div style="font-family: sans-serif; font-size: 16px; color: #333; line-height: 1.6;">
                    <p>Hi ${name || 'Explorer'},</p>
                    
                    <p>Thanks for sharing your thoughts! We truly appreciate your feedback—it helps us build a better experience for everyone.</p>
                    
                    <p>Although you opted out of the beta access, you're still on our priority waitlist for the public launch. We'll keep you updated!</p>

                    <p>Happy travels,</p>
                    
                    <p>
                        <strong>Team Spontane</strong><br/>
                        <a href="https://spontane.quest" style="color: #888; text-decoration: none; font-size: 14px;">spontane.quest</a>
                    </p>
                    
                     <div style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; font-size: 12px; color: #aaa;">
                        <p>Need help? Contact us at <a href="mailto:hello@spontane.quest" style="color: #aaa; text-decoration: underline;">hello@spontane.quest</a></p>
                    </div>
                </div>
            `;
        }

        // Send the selected Email
        const { data: emailData, error: resendError } = await resend.emails.send({
            from: 'Spontane <hello@spontane.quest>',
            to: email,
            subject: subject,
            replyTo: 'hello@spontane.quest',
            html: htmlContent
        });

        if (resendError) {
            console.error("Resend Error:", resendError);
            return NextResponse.json({ error: resendError.message }, { status: 500 });
        }

        console.log("Resend Success:", emailData);
        return NextResponse.json({ success: true, message: "Confirmation email sent." });

    } catch (error: any) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
