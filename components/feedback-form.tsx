"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Loader2, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";

export function FeedbackForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                const errorData = await response.json();
                alert(errorData.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error("Feedback submission error:", err);
            alert("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <section className="py-24 relative z-10">
                <div className="max-w-xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/10 backdrop-blur-md p-12 rounded-3xl text-center shadow-md border border-white/20"
                    >
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-foreground">
                            <MessageSquareHeart className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-manrope font-bold text-foreground mb-4">You're heard.</h3>
                        <p className="text-foreground opacity-80 font-inter leading-relaxed">
                            Thank you for your thoughts. We're building Spontane <br /> one reflection at a time.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="feedback" className="py-24 relative z-10">
            <div className="max-w-xl mx-auto px-6">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-manrope font-bold text-foreground drop-shadow-md">We're listening.</h2>
                    <p className="text-foreground opacity-70 text-lg font-inter font-light">How can we make your journeys better?</p>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Textarea
                        required
                        name="feedback"
                        placeholder="Share your thoughts, feelings, or ideas..."
                        className="min-h-[150px] bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-white/50 rounded-2xl text-lg p-6 font-inter text-foreground placeholder:text-foreground/40 backdrop-blur-sm"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                            name="name"
                            placeholder="Your Name (Optional)"
                            className="h-14 bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-white/50 rounded-xl px-6 font-inter text-foreground placeholder:text-foreground/40 backdrop-blur-sm"
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Your Email (Optional)"
                            className="h-14 bg-white/5 border-white/10 focus-visible:ring-1 focus-visible:ring-white/50 rounded-xl px-6 font-inter text-foreground placeholder:text-foreground/40 backdrop-blur-sm"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-16 rounded-full text-xl font-manrope font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 duration-500 mt-4"
                    >
                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Send Feedback"}
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
