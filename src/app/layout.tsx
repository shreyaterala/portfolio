import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
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
            <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink min-h-screen selection:bg-sage/30`}>
                <nav className="fixed top-0 left-0 right-0 z-40 bg-paper/80 backdrop-blur-sm border-b border-slate-200/50">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="text-[10px] font-bold tracking-[0.2em] font-mono text-slate-400">
                            SHREYA TERALA
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/#about" className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">About Me</Link>
                            <Link href="/#projects" className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Projects</Link>
                            <Link href="/#experience" className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors">Experience</Link>
                        </div>

                        <a
                            href="/portfolio/assets/Resume.pdf"
                            className="text-[10px] font-bold uppercase tracking-widest px-6 py-2 bg-ink text-white rounded-full hover:bg-slate-700 transition-all shadow-lg shadow-slate-900/10"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </div>
                </nav>
                <main className="pt-20">
                    {children}
                </main>
            </body>
        </html>
    );
}
