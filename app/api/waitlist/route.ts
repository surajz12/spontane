import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log("API received waitlist data:", JSON.stringify(data, null, 2));

        // 1. Basic Validation
        if (!data.email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // 2. Insert into Supabase
        const { error } = await supabase
            .from('waitlist')
            .insert([
                {
                    email: data.email,
                    name: data.name || "N/A",
                    trip_type: data.tripType || "N/A",
                }
            ]);

        if (error) {
            // Handle duplicate entries (PostgreSQL code 23505) gracefully
            if (error.code === '23505') {
                console.log("ℹ️ Duplicate signup detected for email:", data.email);
                return NextResponse.json({ success: true });
            }

            console.error("Supabase error detail:", JSON.stringify(error, null, 2));
            return NextResponse.json(
                { error: `Database error: ${error.message} (Code: ${error.code})` },
                { status: 500 }
            );
        }

        console.log("✅ New Waitlist Signup saved to Supabase:", data);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
