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
                        className="mt-14 flex flex-col items-center gap-5"
                    >
                        <p className="text-[10px] font-manrope uppercase tracking-[0.4em] text-foreground/30 font-black">
                            Coming Soon to
                        </p>
                        <div className="flex gap-10 opacity-90">
                            <div className="flex items-center gap-2.5 group">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.96.95-2.04 1.9-3.4 1.9-1.33 0-1.74-.82-3.32-.82s-2.04.79-3.32.82c-1.34.02-2.58-1.09-3.53-2.04-1.96-1.95-3.41-5.51-3.41-8.59 0-2.5 1.54-3.83 3-3.83.74 0 1.44.5 1.88.5.44 0 1.29-.56 2.13-.56s2.5.34 3.44 1.7c-.12.07-2.04 1.19-2.04 3.59 0 2.87 2.5 3.82 2.54 3.84-.04.1-.38 1.34-1.29 2.49zM12.03 3c.6-.74 1.01-1.76.89-2.79-.88.04-1.94.59-2.57 1.32-.57.65-1.07 1.7-.95 2.71.99.08 1.98-.5 2.63-1.24z" />
                                </svg>
                                <span className="font-manrope text-sm font-bold tracking-tight">iOS</span>
                            </div>
                            <div className="flex items-center gap-2.5 group">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.523 15.3414C17.061 15.3414 16.687 15.7154 16.687 16.1774C16.687 16.6394 17.061 17.0134 17.523 17.0134C17.985 17.0134 18.359 16.6394 18.359 16.1774C18.359 15.7154 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01502 15.3414 5.64102 15.7154 5.64102 16.1774C5.64102 16.6394 6.01502 17.0134 6.47702 17.0134C6.93902 17.0134 7.31302 16.6394 7.31302 16.1774C7.31302 15.7154 6.93902 15.3414 6.47702 15.3414ZM18.2 11.2314L20.25 7.68138C20.37 7.47138 20.3 7.20138 20.1 7.08138C19.89 6.96138 19.62 7.03138 19.5 7.24138L17.43 10.8214C15.82 10.0814 13.99 9.67139 12 9.67139C10.01 9.67139 8.18002 10.0814 6.57002 10.8214L4.50002 7.24138C4.38002 7.03138 4.11002 6.96138 3.90002 7.08138C3.70002 7.20138 3.63002 7.47138 3.75002 7.68138L5.80002 11.2314C2.51002 12.9814 0.230017 16.3214 0.0100171 20.2314C0 20.4714 0.200017 20.6714 0.440017 20.6714H23.57C23.81 20.6714 24.01 20.4714 24 20.2314C23.77 16.3214 21.49 12.9814 18.2 11.2314Z" />
                                </svg>
                                <span className="font-manrope text-sm font-bold tracking-tight">Android</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
