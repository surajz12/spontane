import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Check if keys are missing on the server
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
            return NextResponse.json({ error: "Supabase URL is missing in Vercel Settings. Please add NEXT_PUBLIC_SUPABASE_URL." }, { status: 500 });
        }

        if (!data.email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

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
            // Check for duplicate key error (Postgres code 23505)
            if (error.code === '23505') {
                return NextResponse.json({ success: true, message: "You're already on the list!" });
            }
            return NextResponse.json(
                { error: `Database Error: ${error.message}` },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: `Connection failed: ${error.message}` }, { status: 500 });
    }
}
