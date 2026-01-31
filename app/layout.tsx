import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
      <body className={cn("min-h-screen bg-background font-inter antialiased", inter.variable, manrope.variable)} suppressHydrationWarning>
        <SunsetProvider>
          <SunsetBackground />
          <svg className="sr-only">
            <filter id="clean-logo-filter" colorInterpolationFilters="sRGB">
              {/* This filter turns the logo pure white and keys out anything that is white or light gray (like a checkerboard) */}
              <feColorMatrix type="matrix" values="
                0 0 0 0 1
                0 0 0 0 1
                0 0 0 0 1
                -1 -1 -1 2.5 0" />
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
