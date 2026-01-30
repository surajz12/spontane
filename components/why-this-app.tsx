"use client";

import { motion } from "framer-motion";

export function WhyThisApp() {
    return (
        <section className="py-24 relative z-10">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex justify-center mb-8">
                            <span className="text-[#ffd700] text-3xl drop-shadow-md">✦</span>
                        </div>

                        <h2 className="text-sm font-manrope font-medium tracking-[0.2em] text-foreground opacity-70 uppercase mb-10">
                            Our Philosophy
                        </h2>

                        <p className="text-3xl md:text-5xl font-manrope font-semibold text-foreground leading-tight md:leading-snug drop-shadow-lg">
                            We don't want your attention. <br />
                            We want you to <span className="italic text-accent-dynamic">go outside.</span>
                        </p>

                        <div className="mt-12 max-w-xl mx-auto">
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-inter font-light">
                                Traveling has become a performance. Spontane is the quiet backstage.
                                A vault for memories, not a stage for likes.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
