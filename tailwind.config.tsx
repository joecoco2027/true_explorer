import type { Config } from 'tailwindcss';

const config: Config = {
    plugins: [require("@tailwindcss/typography"), require('@tailwindcss/aspect-ratio')],
    darkMode: 'class',
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/blog/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/mdx-components.tsx",
    ],
    theme: {
        fontFamily: {
            sans: [
                "var(--font-work-sans)",
                "ui-sans-serif",
                "system-ui",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
                "sans-serif",
            ],
            serif: [
                "var(--font-crimson)",
                "ui-serif",
                "Georiga",
                "Cambria",
                "Times New Roman", 
                "Times",
                "serif",
            ],
            mono: [
                "var(--font-overpass-mono)",
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace",
            ],
        },
        extend: {
            fontFamily: {
                serif: [
                    "var(--font-crimson)",
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    "Times New Roman",
                    "Times",
                    "serif",
                ],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000000",
            white: "#ffffff",
            blue: {
                50: "var(--color-blue-50)",
                100: "var(--color-blue-100)",
                200: "var(--color-blue-200)",
                300: "var(--color-blue-300)",
                400: "var(--color-blue-400)",
                500: "var(--color-blue-500)",
                600: "var(--color-blue-600)",
                700: "var(--color-blue-700)",
                800: "var(--color-blue-800)",
                900: "var(--color-blue-900)",
                950: "var(--color-blue-950)",
            },
            teal: {
                50: "var(--color-teal-50)",
                100: "var(--color-teal-100)",
                200: "var(--color-teal-200)",
                300: "var(--color-teal-300)",
                400: "var(--color-teal-400)",
                500: "var(--color-teal-500)",
                600: "var(--color-teal-600)",
                700: "var(--color-teal-700)",
                800: "var(--color-teal-800)",
                900: "var(--color-teal-900)",
                950: "var(--color-teal-950)",
            },
            neutral: {
                50: "var(--color-neutral-50)",
                100: "var(--color-neutral-100)",
                200: "var(--color-neutral-200)",
                300: "var(--color-neutral-300)",
                400: "var(--color-neutral-400)",
                500: "var(--color-neutral-500)",
                600: "var(--color-neutral-600)",
                700: "var(--color-neutral-700)",
                800: "var(--color-neutral-800)",
                900: "var(--color-neutral-900)",
                950: "var(--color-neutral-950)",
            }
            
        }
    }
};
