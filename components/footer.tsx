import { Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 relative z-10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo.png"
                            alt="Spontane Logo"
                            className="h-10 w-auto opacity-50 contrast-125"
                            style={{
                                imageRendering: 'crisp-edges',
                                filter: 'url(#remove-white) brightness(0) invert(1)'
                            } as any}
                        />
                        <span className="text-xl font-bold tracking-tight font-manrope text-foreground">Spontane</span>
                    </div>
                    <p className="text-sm text-foreground opacity-50 font-inter">
                        © {new Date().getFullYear()} Spontane Inc. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/terms"
                            className="text-xs md:text-sm text-foreground opacity-40 hover:opacity-100 transition-opacity font-inter whitespace-nowrap"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-xs md:text-sm text-foreground opacity-40 hover:opacity-100 transition-opacity font-inter whitespace-nowrap"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="hidden md:block w-px h-4 bg-white/10" />

                    <a
                        href="https://instagram.com/spontane.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-4 w-4 text-foreground opacity-70 group-hover:opacity-100" />
                        <span className="text-xs font-medium text-foreground opacity-60 group-hover:opacity-100">Follow us</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
