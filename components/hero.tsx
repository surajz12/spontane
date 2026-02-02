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
                                <svg
                                    className="w-6 h-6 fill-current"
                                    viewBox="0 0 24 24"
                                    shapeRendering="geometricPrecision"
                                >
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.8-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.82 13.5 4.02 11.26c.6-1.09 1.69-1.78 2.87-1.8 1.15-.02 1.98.8 2.61.8.63 0 1.8-.8 3.05-.8 1.05.02 1.82.53 2.5 1.04-2.22 1.34-1.85 4.3.09 5.21-.19.51-.46 1.01-.7 1.49-.63 1.28-1.54 2.11-1.72 2.3zm-3.32-15.8c.68-.82 1.13-1.95.99-3.08-.94.05-2.1.66-2.78 1.47-.59.7-1.12 1.83-.98 2.92 1.05.08 2.12-.53 2.77-1.3z" />
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
