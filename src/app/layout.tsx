import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
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
    metadataBase: new URL("https://shreyaterala.github.io/portfolio"),
    title: {
        default: "Shreya Terala — Robotics & Mechanical Engineer",
        template: "%s | Shreya Terala",
    },
    description:
        "Robotics & Mechanical Engineer (MSE Robotics @ Johns Hopkins, BS MechE @ Georgia Tech). Projects across robot learning, manipulation, controls, and assistive haptics.",
    keywords: [
        "robotics",
        "mechanical engineering",
        "reinforcement learning",
        "controls",
        "haptics",
        "Shreya Terala",
    ],
    authors: [{ name: "Shreya Terala" }],
    icons: {
        icon: "/assets/profile.jpg",
        apple: "/assets/profile.jpg",
    },
    openGraph: {
        type: "website",
        url: "/",
        title: "Shreya Terala — Robotics & Mechanical Engineer",
        description:
            "Projects across robot learning, manipulation, controls, and assistive haptics.",
        siteName: "Shreya Terala",
        images: [
            {
                url: "/assets/profile.jpg",
                width: 1200,
                height: 1200,
                alt: "Shreya Terala",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Shreya Terala — Robotics & Mechanical Engineer",
        description:
            "Projects across robot learning, manipulation, controls, and assistive haptics.",
        images: ["/assets/profile.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Theme: applied synchronously before paint to avoid FOUC */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function () {
                                try {
                                    var key = 'shreyaterala-theme';
                                    var stored = localStorage.getItem(key);
                                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    var theme = stored === 'light' || stored === 'dark'
                                        ? stored
                                        : (prefersDark ? 'dark' : 'light');
                                    if (theme === 'dark') {
                                        document.documentElement.classList.add('dark');
                                    }
                                } catch (e) { /* localStorage blocked — fall back to light */ }
                            })();
                        `,
                    }}
                />
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QSB86F8R4"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-0QSB86F8R4');
                        `,
                    }}
                />
            </head>
            <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink min-h-screen selection:bg-accent/30`}>
                <Navbar />
                <main className="pt-20">
                    {children}
                </main>
            </body>
        </html>
    );
}
