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
                        className="mt-14 flex flex-col items-center gap-5"
                    >
                        <p className="text-[10px] font-manrope uppercase tracking-[0.4em] text-foreground/40 font-black">
                            Coming Soon to
                        </p>
                        <div className="flex gap-12">
                            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.96.95-2.04 1.9-3.4 1.9-1.33 0-1.74-.82-3.32-.82s-2.04.79-3.32.82c-1.34.02-2.58-1.09-3.53-2.04-1.96-1.95-3.41-5.51-3.41-8.59 0-2.5 1.54-3.83 3-3.83.74 0 1.44.5 1.88.5.44 0 1.29-.56 2.13-.56s2.5.34 3.44 1.7c-.12.07-2.04 1.19-2.04 3.59 0 2.87 2.5 3.82 2.54 3.84-.04.1-.38 1.34-1.29 2.49zM12.03 3c.6-.74 1.01-1.76.89-2.79-.88.04-1.94.59-2.57 1.32-.57.65-1.07 1.7-.95 2.71.99.08 1.98-.5 2.63-1.24z" />
                                </svg>
                                <span className="font-manrope text-sm font-black tracking-tight">iOS</span>
                            </div>
                            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <span className="font-manrope text-sm font-black tracking-tight">Android</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
