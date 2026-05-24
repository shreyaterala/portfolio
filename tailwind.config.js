/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "rgb(var(--color-paper) / <alpha-value>)",
                ink: "rgb(var(--color-ink) / <alpha-value>)",
                accent: "rgb(var(--color-accent) / <alpha-value>)",
                clay: "rgb(var(--color-clay) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                muted: "rgb(var(--color-muted) / <alpha-value>)",
                hairline: "rgb(var(--color-hairline) / <alpha-value>)",
            },
            fontFamily: {
                sans: ["var(--font-outfit)"],
                mono: ["var(--font-jetbrains-mono)"],
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                        opacity: 0.3,
                    },
                    "33%": {
                        transform: "translate(60px, -80px) scale(1.2)",
                        opacity: 0.6,
                    },
                    "66%": {
                        transform: "translate(-40px, 40px) scale(0.8)",
                        opacity: 0.2,
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                        opacity: 0.3,
                    },
                },
            },
        },
    },
    plugins: [],
};
