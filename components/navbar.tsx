"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const { scrollY } = useScroll();

    // Animate opacity and backdrop blur based on scroll
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-[100] h-16 md:h-20 flex items-center transition-all duration-300 pointer-events-none"
        >
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm opacity-0" style={{ opacity: opacity as any }} />

            <div className="container mx-auto px-6 flex items-center justify-between relative z-10 pointer-events-auto">
                <div className="flex items-center gap-3">
                    <img src="/images/logo-transparent.png" alt="Spontane Logo" className="h-12 md:h-14 w-auto drop-shadow-sm" />
                    <span className="text-xl md:text-2xl font-bold tracking-tight font-manrope text-foreground drop-shadow-md">Spontane</span>
                </div>

                <Button
                    variant="ghost"
                    className="text-foreground hover:bg-foreground/10 hover:text-foreground font-inter font-medium rounded-full px-4 md:px-6 text-sm md:text-base border border-transparent hover:border-foreground/10"
                    onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                >
                    <span className="hidden sm:inline">Get Early Access</span>
                    <span className="sm:hidden">Get Access</span>
                </Button>
            </div>
        </motion.nav>
    );
}
