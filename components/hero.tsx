"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
    return (
        <section className="relative flex flex-col min-h-[70vh] items-center justify-center overflow-hidden pt-20">
            {/* No background color or image here - letting the fixed SunsetBackground show through */}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="transform-gpu"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-manrope font-light text-foreground tracking-tighter drop-shadow-lg text-balance">
                        Some journeys <br />
                        <span className="font-serif italic opacity-90 text-accent-dynamic">stay with you.</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="mt-8 text-xl md:text-2xl font-light text-foreground opacity-80 max-w-2xl mx-auto leading-relaxed"
                    >
                        Relive the feeling, not just the view. <br />
                        <span className="text-base opacity-70 mt-2 block">Join the movement for mindful travel.</span>
                    </motion.p>

                    {/* Coming Soon Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <p className="text-sm font-manrope uppercase tracking-[0.2em] text-foreground/40 font-bold">
                            Coming Soon to
                        </p>
                        <div className="flex gap-6 opacity-60">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.7-19.1-76.9-19.1-34.2 0-72.7 20.4-90.8 54.4-38.5 73.1-10.4 182 26.9 235.4 18.2 26.4 46 54.4 83.5 54.4 35.8 0 49.3-21 91.8-21s54.2 21 91.8 21c38.5 0 63.3-25.2 81.3-52 14.2-20.7 21.8-41.7 22.2-43.2-1.3-.3-65.6-21.6-66.6-96.2zM286.3 37.1c16.1-19.1 27.1-45.5 23.5-72.8-24.3 3.1-51.5 19.3-69.3 40.7-14.7 17.5-27.7 44.4-23.7 70.3 26.5 2.1 52.1-14.7 69.5-38.2z" /></svg>
                                <span className="font-manrope text-sm font-medium">iOS</span>
                            </div>
                            <div className="w-[1px] h-4 bg-foreground/20 self-center" />
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                <span className="font-manrope text-sm font-medium">Android</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
