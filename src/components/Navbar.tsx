"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isHome = pathname === "/";

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `/#${id}`);
            }
        }
        setMobileOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 bg-paper/80 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xs font-bold tracking-[0.2em] font-mono text-slate-400 hover:text-ink transition-colors"
                    >
                        SHREYA TERALA
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={isHome ? `#${link.href}` : `/#${link.href}`}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-xs font-bold uppercase tracking-widest hover:text-slate-500 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <a
                            href="/portfolio/assets/Resume.pdf"
                            className="hidden sm:inline-flex text-xs font-bold uppercase tracking-widest px-6 py-2 bg-ink text-paper rounded-full hover:opacity-80 transition-all shadow-lg shadow-slate-900/10"
                            target="_blank"
                        >
                            Resume
                        </a>

                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen((v) => !v)}
                            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 hover:border-ink dark:hover:border-accent transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-ink"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {mobileOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile sheet */}
            <div
                className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
                    mobileOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!mobileOpen}
            >
                <div
                    className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />
                <div
                    className={`absolute top-16 left-0 right-0 bg-paper border-b border-slate-200 dark:border-slate-700 shadow-xl transition-transform duration-300 ${
                        mobileOpen ? "translate-y-0" : "-translate-y-4"
                    }`}
                >
                    <div className="px-6 py-8 flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={isHome ? `#${link.href}` : `/#${link.href}`}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-base font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="/portfolio/assets/Resume.pdf"
                            target="_blank"
                            className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 bg-ink text-paper rounded-full hover:opacity-80 transition-all"
                        >
                            Download Resume
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
