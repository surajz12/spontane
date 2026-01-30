"use client";

import React, { createContext, useContext, useState } from "react";

type SunsetContextType = {
    isSunrise: boolean;
    triggerSunrise: () => void;
};

const SunsetContext = createContext<SunsetContextType | undefined>(undefined);

export function SunsetProvider({ children }: { children: React.ReactNode }) {
    const [isSunrise, setIsSunrise] = useState(false);

    const triggerSunrise = () => {
        setIsSunrise(true);
    };

    return (
        <SunsetContext.Provider value={{ isSunrise, triggerSunrise }}>
            <div className={`transition-all duration-[3000ms] ${isSunrise ? "sunrise" : ""}`}>
                {children}
            </div>
        </SunsetContext.Provider>
    );
}

export function useSunset() {
    const context = useContext(SunsetContext);
    if (context === undefined) {
        throw new Error("useSunset must be used within a SunsetProvider");
    }
    return context;
}
