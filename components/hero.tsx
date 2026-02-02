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
                        className="mt-8 text-xl md:text-2xl font-serif italic text-foreground opacity-90 max-w-2xl mx-auto leading-relaxed"
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
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
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
