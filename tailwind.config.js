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
                sage: "#94a3b8",
                clay: "#1e293b",
            },
            fontFamily: {
                sans: ["var(--font-outfit)"],
                mono: ["var(--font-jetbrains-mono)"],
            },
        },
    },
    plugins: [],
};
