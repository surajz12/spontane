import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SunsetProvider } from "@/components/sunset-provider";
import { SunsetBackground } from "@/components/sunset-background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Spontane - Join the Waitlist",
  description: "The spontaneous way to connect. Join the waitlist for early access.",
  icons: {
    icon: [
      { url: "/images/logo-transparent.png" },
      { url: "/images/logo-transparent.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-transparent.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-inter antialiased", inter.variable, manrope.variable, playfair.variable)} suppressHydrationWarning>
        <SunsetProvider>
          <SunsetBackground />
          <svg className="sr-only">
            <filter id="remove-background" colorInterpolationFilters="sRGB">
              {/* Convert colors to luminance and put it in the alpha channel */}
              <feColorMatrix type="luminanceToAlpha" />
              {/* Invert the alpha so white (1) becomes transparent (0) and black (0) becomes opaque (1) */}
              <feComponentTransfer>
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              {/* Apply this new alpha mask back to the original colors */}
              <feComposite in="SourceGraphic" operator="in" />
            </filter>
          </svg>
          <div className="relative z-10">
            {children}
          </div>
        </SunsetProvider>
      </body>
    </html>
  );
}
