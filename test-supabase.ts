import { supabase } from './lib/supabase';

async function testSupabase() {
    console.log("Checking Supabase connection...");
    const { data, error } = await supabase.from('waitlist').select('*').limit(1);

    if (error) {
        console.error("Error accessing waitlist table:", error);
    } else {
        console.log("Successfully connected to waitlist table. Sample data:", data);
    }
}

testSupabase();
