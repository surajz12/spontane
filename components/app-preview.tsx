"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const FEATURES = [
    {
        title: "Visual Timeline",
        description: "Relive the journey chronologically. Your photos, notes, and moments woven together into a beautiful, scrollable story.",
        image: "/images/screenshots/screen-4.jpg",
        color: "from-amber-400 to-orange-500"
    },
    {
        title: "Organized Albums",
        description: "Keep your adventures sorted. Create albums for every trip and never lose a memory again. Your personal travel library.",
        image: "/images/screenshots/screen-3.jpg",
        color: "from-blue-400 to-indigo-400"
    },
    {
        title: "Collaborative Trips",
        description: "Travel better together. Join shared albums with a simple code and contribute to a collective journal with friends.",
        image: "/images/screenshots/screen-7.jpg",
        color: "from-cyan-400 to-sky-400"
    },
    {
        title: "Smart Expenses",
        description: "Stay on budget with localized tracking and real-time exchange rates. Know exactly where your money goes—from food to flights—at a glance.",
        image: "/images/screenshots/screen-1.jpg",
        color: "from-orange-400 to-rose-400"
    },
    {
        title: "Travel Checklists",
        description: "Pack with confidence. Simple, integrated checklists ensure you never leave the essentials (like your passport) behind.",
        image: "/images/screenshots/screen-2.jpg",
        color: "from-yellow-400 to-amber-400"
    },
    {
        title: "Time Capsules",
        description: "Send a message to your future self. Lock away memories, photos, or letters to be rediscovered when the time is right.",
        image: "/images/screenshots/screen-6.jpg",
        color: "from-purple-400 to-pink-400"
    },
    {
        title: "Quick Actions",
        description: "Capture in an instant. The floating menu gives you one-tap access to add expenses, memories, or check your tasks.",
        image: "/images/screenshots/screen-5.jpg",
        color: "from-gray-400 to-slate-400"
    },
];

export function AppPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCard, setActiveCard] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsLength = FEATURES.length;
        // Calculate which card index corresponds to the current scroll progress
        const index = Math.min(
            Math.max(Math.floor(latest * cardsLength), 0),
            cardsLength - 1
        );

        // Only update if it changed to avoid excessive renders
        if (index !== activeCard) {
            setActiveCard(index);
        }
    });

    return (
        <section className="py-24 md:py-32 relative z-10" id="app-preview">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-manrope font-extrabold tracking-tight sm:text-5xl mb-6 text-white drop-shadow-md">
                        Every Feature, <span className="text-accent-dynamic">Designed for Travel</span>
                    </h2>
                    <p className="text-white/80 text-xl font-inter drop-shadow-sm">
                        Spontane isn't just a gallery. It's a complete toolkit for the modern explorer.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative flex flex-col md:flex-row gap-10 md:gap-20"
                >
                    {/* Left Column: Text Descriptions (Hidden on mobile) */}
                    <div className="hidden md:flex w-full md:w-1/2 flex-col justify-between py-20">
                        {FEATURES.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.2 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col justify-center min-h-[60vh] px-4 md:pl-10 cursor-pointer transition-all duration-300 ${activeCard === index ? 'scale-100' : 'scale-95'}`}
                                onClick={() => setActiveCard(index)}
                            >
                                <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                                    <span className="font-bold text-lg">{index + 1}</span>
                                </div>
                                <h3 className={`text-3xl md:text-5xl font-manrope font-bold mb-6 transition-colors duration-300 ${activeCard === index ? 'text-white' : 'text-white/40'}`}>
                                    {feature.title}
                                </h3>
                                <p className="text-lg md:text-xl text-white/70 font-inter leading-relaxed max-w-md">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                        <div className="h-[20vh]" /> {/* Spacer for last item */}
                    </div>

                    {/* Right Column: Sticky Presentation Area */}
                    <div className="hidden md:block w-full md:w-3/5 sticky top-0 h-screen flex items-center justify-center p-4 lg:p-8">
                        <motion.div
                            className="relative w-full aspect-[16/10] max-w-5xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col group transform-gpu"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.01 }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                e.currentTarget.style.setProperty("--rotate-x", `${y * -10}deg`);
                                e.currentTarget.style.setProperty("--rotate-y", `${x * 10}deg`);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.setProperty("--rotate-x", "0deg");
                                e.currentTarget.style.setProperty("--rotate-y", "0deg");
                            }}
                            style={{
                                transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
                                transition: "transform 0.1s ease-out"
                            } as any}
                        >
                            {/* Window Chrome / Title Bar */}
                            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 space-x-2 backdrop-blur-sm z-20">
                                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
                            </div>

                            {/* Content Area */}
                            <div className="relative flex-1 w-full h-full overflow-hidden">
                                {isMounted ? (
                                    <AnimatePresence mode="popLayout" custom={activeCard}>
                                        <motion.div
                                            key={activeCard}
                                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -50, scale: 1.05 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                                        >
                                            {/* Blurred Background for Ambiance */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-40 blur-3xl scale-125"
                                                style={{ backgroundImage: `url(${FEATURES[activeCard].image})` }}
                                            />

                                            {/* Main Image */}
                                            <div className="relative z-10 p-8 w-full h-full flex items-center justify-center">
                                                <img
                                                    src={FEATURES[activeCard].image}
                                                    alt={FEATURES[activeCard].title}
                                                    className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/20 object-contain"
                                                />
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                ) : (
                                    /* Static fallback for SSR/Initial Render to prevent hydration mismatch */
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                        <div className="relative z-10 p-8 w-full h-full flex items-center justify-center">
                                            <img
                                                src={FEATURES[0].image}
                                                alt={FEATURES[0].title}
                                                className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/20 object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
                        </motion.div>
                    </div>

                    {/* Mobile View: Standard Cards */}
                    <div className="md:hidden space-y-16 pb-24">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="bg-white/10 rounded-3xl border border-white/20 shadow-xl overflow-hidden backdrop-blur-lg">
                                <div className="p-8">
                                    <div className={`w-10 h-10 rounded-lg mb-4 bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                                        {index + 1}
                                    </div>
                                    <h3 className="text-2xl font-manrope font-bold mb-3 text-white">{feature.title}</h3>
                                    <p className="text-white/70 font-inter leading-relaxed">{feature.description}</p>
                                </div>
                                <div className="bg-black/10 p-6 border-t border-white/10">
                                    <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
