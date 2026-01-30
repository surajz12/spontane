import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        if (!data.feedback) {
            return NextResponse.json({ error: "Feedback is required" }, { status: 400 });
        }

        const { error } = await supabase
            .from('feedback')
            .insert([
                {
                    feedback: data.feedback,
                    name: data.name || "Anonymous",
                    email: data.email || null,
                }
            ]);

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: "Database setup incomplete. Make sure you created the 'feedback' table in Supabase." },
                { status: 500 }
            );
        }

        console.log("✅ New Feedback saved to Supabase:", data);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
