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
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                                    <path d="M150.37,130.25c-2.45,5.66-5.35,10.87-8.71,15.66c-8.58,12.23-17.67,24.37-30.66,24.57c-12.77,0.21-16.91-7.56-31.46-7.56 c-14.55,0-19.1,7.35-31.25,7.77c-12.37,0.41-22.12-12.86-30.79-25.27C7.77,130.48,0,105.15,0,79.52c0-39.31,25.46-60.05,50.55-60.05 c12.57,0,24.43,8.67,32.13,8.67c7.71,0,21.03-10.13,36-8.61c6.3,0.27,24.01,2.52,35.37,19.14c-0.92,0.57-21.12,12.3-21.12,36.29 c0,28.56,24.79,37.6,25.05,37.7C157.85,112.55,153.94,122.03,150.37,130.25z M116.42,42.21c-0.1-0.12-0.19-0.24-0.29-0.37 c-6.44-7.79-10.79-18.66-9.55-29.51c0.11-1,0.23-2,0.36-3c9.46,0.39,20.24,6.31,27,14.19c0.1,0.11,0.18,0.23,0.27,0.34 c6.53,7.63,11.39,18.77,9.75,29.74C134.48,54.49,124.46,49.07,116.42,42.21z" />
                                </svg>
                                <span className="font-manrope text-sm font-medium">iOS</span>
                            </div>
                            <div className="w-[1px] h-4 bg-foreground/20 self-center" />
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <span className="font-manrope text-sm font-medium">Android</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
