import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Shreya Terala",
    description: "Engineering Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink min-h-screen selection:bg-accent/30`}>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-0QSB86F8R4"
                    strategy="beforeInteractive"
                />
                <Script id="google-analytics" strategy="beforeInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-0QSB86F8R4');
                    `}
                </Script>
                <Navbar />
                <main className="pt-20">
                    {children}
                </main>
            </body>
        </html>
    );
}
