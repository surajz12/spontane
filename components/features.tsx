"use client";

import { motion } from "framer-motion";
import { Camera, Map, Clock, BookOpen } from "lucide-react";

const features = [
    {
        kicker: "Capture",
        title: "The moment, raw.",
        description: "Don't curate. Just capture. Photos, voice notes, and location data blend into a single, seamless memory. It feels like being there again.",
        icon: Camera,
        image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=2080&auto=format&fit=crop", // Sunrise/Camera
    },
    {
        kicker: "Chronicles",
        title: "Order from chaos.",
        description: "Your trips sort themselves. Spontane groups your scattered moments into beautiful, chronological chapters. It's not a folder; it's a story.",
        icon: Map,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop", // Map/Travel
    },
    {
        kicker: "Time Capsule",
        title: "A gift to yourself.",
        description: "Lock a memory away. Set a date for it to reopen. Rediscover a trip when you need it most, years down the line.",
        icon: Clock,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop", // Landscape/Time
    },
    {
        kicker: "Reflect",
        title: "The Inner Journey.",
        description: "A journal that captures how you felt, not just what you saw. Watch your own story unfold and understand how the road changed you.",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop", // Journal/Writing
    },
];

export function Features() {
    return (
        <section className="py-32 relative overflow-hidden z-10" id="features">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col gap-40">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3 text-accent-dynamic font-medium tracking-widest uppercase text-sm">
                                    <feature.icon className="w-5 h-5" />
                                    {feature.kicker}
                                </div>

                                <h2 className="text-4xl md:text-5xl font-manrope font-bold text-white leading-[1.2] drop-shadow-md">
                                    {feature.title}
                                </h2>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-inter font-light">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Visual Side - Cinematic Card */}
                            <div className="flex-1 w-full">
                                <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                    />
                                    {/* Glass Caption */}
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-sm font-medium tracking-wide">Spontane Memory #{index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
