import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          pinned: "var(--color-text-pinned)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-bg-base)",
          muted: "var(--color-bg-muted)",
          pinned: "var(--color-bg-pinned)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--color-border-base)",
          card: "var(--color-border-card)",
          muted: "var(--color-border-muted)",
          pinned: "var(--color-border-pinned)",
        },
      },
      fill: {
        skin: {
          base: "var(--color-icon-base)",
          muted: "var(--color-icon-muted)",
          pinned: "var(--color-icon-pinned)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
