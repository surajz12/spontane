"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSunset } from "@/components/sunset-provider";

const TRIP_TYPES = ["Solo", "Friends", "Nature", "City", "Spontaneous"];

export function WaitlistForm({ minimal = false }: { minimal?: boolean }) {
    const { triggerSunrise } = useSunset();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [tripType, setTripType] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                triggerSunrise(); // Trigger Global Sunrise Animation
            } else {
                const errorData = await response.json();
                alert(errorData.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Form submission error:", err);
            alert("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    const formContent = (
        <div className={minimal ? "" : "max-w-xl mx-auto px-6 relative z-10"}>
            {!minimal && (
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-manrope font-light text-foreground">Begin your journey.</h2>
                    <p className="text-foreground opacity-70 text-lg font-inter font-light">Join the early access for specific travelers.</p>
                </div>
            )}

            <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Trip Personalization */}
                    <div className="space-y-4 text-center">
                        <label className="text-xs tracking-[0.2em] uppercase text-foreground opacity-60 font-manrope font-medium">How do you travel?</label>
                        <div className="flex flex-wrap justify-center gap-2">
                            {TRIP_TYPES.map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setTripType(type)}
                                    className={`px-5 py-2 rounded-full text-sm transition-all duration-300 font-manrope font-medium ${tripType === type
                                        ? "bg-white text-secondary shadow-lg scale-105"
                                        : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 hover:border-white/30"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <input type="hidden" name="tripType" value={tripType} />
                    </div>

                    <div className="space-y-4">
                        <Input
                            required
                            name="name"
                            placeholder="First Name"
                            className="h-12 bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-white/50 rounded-xl text-lg px-5 font-inter text-white placeholder:text-white/40"
                        />
                        <Input
                            required
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="h-12 bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-white/50 rounded-xl text-lg px-5 font-inter text-white placeholder:text-white/40"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading || !tripType}
                        className="w-full h-14 rounded-full text-lg font-manrope font-semibold bg-white text-secondary hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-300 animate-glow-pulse"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Request Early Access"}
                    </Button>
                </form>
            </motion.div>
        </div>
    );

    if (success) {
        return (
            <div className={minimal ? "" : "py-20 min-h-[50vh] flex items-center justify-center relative z-10"}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/20 backdrop-blur-xl border border-white/30 p-12 rounded-3xl text-center max-w-md mx-auto shadow-2xl"
                >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-foreground shadow-inner">
                        <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-manrope font-bold text-foreground mb-4">Ticket confirmed.</h3>
                    <p className="text-foreground opacity-80 font-inter leading-relaxed">
                        We've saved a seat for you. <br /> Watch your inbox for the sunrise.
                    </p>
                </motion.div>
            </div>
        );
    }

    if (minimal) {
        return formContent;
    }

    return (
        <section id="waitlist" className="py-20">
            {formContent}
        </section>
    );
}
