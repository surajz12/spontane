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
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 1024 1024">
                                    <path d="M867,.18c-34.33,2.16-77.94,22.84-102.3,51.27-22,25.4-40.09,64.21-34.09,102.3,37.77,3,78-18.91,101.44-48C857.26,76.53,873.34,37.77,867,.18ZM889.36,197.64c-53.25-3.32-98,28.49-123.64,28.49s-62.19-27.35-104.53-27.35c-54.8,0-104.91,31.42-133,80.37-56.7,98.83-14.48,245.92,40.15,325,26.73,38.65,58.55,81.44,100.22,79.91,39.69-1.5,54.74-25.59,102.6-25.59s61.27,25.59,103.11,24.7c43.68-.89,71.12-38.65,97.77-77.42,30.8-44.8,43.46-88.16,44.17-90.41-.95-.44-84.6-32.42-85.39-129C830.15,229.07,889.36,197.64,889.36,197.64Z" />
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
