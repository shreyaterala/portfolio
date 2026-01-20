"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";

export default function Navbar() {
    const pathname = usePathname();

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        // Only handle smooth scroll if we are on the home page
        // pathname is usually just "/" when handling base path in next.config.js? 
        // Let's assume safely that if it equals "/" or ends with "/", we are home.
        if (pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // Also update URL hash without scrolling
                window.history.pushState(null, "", `/#${id}`);
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-paper/80 backdrop-blur-sm border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-[10px] font-bold tracking-[0.2em] font-mono text-slate-400">
                    SHREYA TERALA
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/#about"
                        onClick={(e) => handleScroll(e, "about")}
                        className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/#projects"
                        onClick={(e) => handleScroll(e, "projects")}
                        className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/#experience"
                        onClick={(e) => handleScroll(e, "experience")}
                        className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
                    >
                        Experience
                    </Link>
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
    );
}
