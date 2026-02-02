"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSunset } from "./sunset-provider";
import { useEffect, useState } from "react";

export function SunsetBackground() {
    const { isSunrise } = useSunset();
    const { scrollY } = useScroll();

    // Parallax values (clamped to prevent exposing white/fallback edges)
    const sunY = useTransform(scrollY, [0, 1000], [0, -50], { clamp: true }); // Move slightly up as we scroll
    const skyY = useTransform(scrollY, [0, 1000], [0, 20], { clamp: true });

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Sky Gradient Layer */}
            <motion.div
                className="absolute -inset-[10%] w-[120%] h-[120%]"
                style={{ y: skyY }}
                initial={{ background: "linear-gradient(to bottom, #240b36 0%, #c31432 40%, #512b58 100%)" }} // Deep Sunset
                animate={{
                    background: isSunrise
                        ? "linear-gradient(to bottom, #7dd3fc 0%, #38bdf8 60%, #fdba74 100%)" // Richer, more colorful morning sky
                        : "linear-gradient(to bottom, #2b1055 0%, #7597de 50%, #24243e 100%)" // Calm Night/Sunset
                }}
                transition={{ duration: 3, ease: "linear" }}
            />

            {/* Sun */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full blur-lg"
                style={{ y: sunY }}
                initial={{ bottom: "5%", width: "clamp(200px, 25vw, 400px)", height: "clamp(200px, 25vw, 400px)", backgroundColor: "#ff7e5f", opacity: 0.8 }}
                animate={{
                    bottom: isSunrise ? "60%" : "8%",
                    width: isSunrise ? "clamp(120px, 15vw, 250px)" : "clamp(200px, 25vw, 400px)",
                    height: isSunrise ? "clamp(120px, 15vw, 250px)" : "clamp(200px, 25vw, 400px)",
                    backgroundColor: isSunrise ? "#fdbb2d" : "#ff512f",
                    opacity: isSunrise ? 0.9 : 0.8,
                }}
                transition={{ duration: 3, ease: "linear" }}
            />

            {/* Core Sun Circle (Crisper inner circle) */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 rounded-full"
                style={{ y: sunY }}
                initial={{ bottom: "10%", width: "clamp(150px, 18vw, 300px)", height: "clamp(150px, 18vw, 300px)", backgroundColor: "#feb47b" }}
                animate={{
                    bottom: isSunrise ? "62%" : "12%",
                    width: isSunrise ? "clamp(80px, 10vw, 150px)" : "clamp(150px, 18vw, 300px)",
                    height: isSunrise ? "clamp(80px, 10vw, 150px)" : "clamp(150px, 18vw, 300px)",
                    backgroundColor: isSunrise ? "#fff5c3" : "#ff7e5f",
                }}
                transition={{ duration: 3, ease: "linear" }}
            />

            {/* Horizon Line / Ground */}
            <motion.div
                className="absolute bottom-0 w-full h-[20vh] bg-black/20 blur-md"
                animate={{ opacity: isSunrise ? 0 : 0.3 }}
                transition={{ duration: 1.5 }}
            />

            {/* Grain Overlay (Subtle texture) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />
        </div>
    );
}
