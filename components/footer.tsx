import { Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo-transparent.png" alt="Spontane Logo" className="h-10 w-auto logo-filter" />
                        <span className="text-xl font-bold tracking-tight font-manrope text-foreground">Spontane</span>
                    </div>
                    <p className="text-sm text-foreground opacity-50 font-inter">
                        © {new Date().getFullYear()} Spontane Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="/privacy"
                        className="text-sm text-foreground opacity-50 hover:opacity-100 transition-opacity font-inter"
                    >
                        Privacy Policy
                    </Link>
                    <a
                        href="https://instagram.com/spontane.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-full hover:bg-foreground/10 transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5 text-foreground opacity-70 hover:opacity-100" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
