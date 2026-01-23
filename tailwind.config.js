/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: "#fbfaf5",
                ink: "#1e293b",
                accent: "#0e7490", // Vivid Pacific Cyan
                clay: "#1e293b",
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
