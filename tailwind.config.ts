import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#666666",
        canvas: "#F8F8F6",
        lavender: "#9A8CFF",
        ice: "#B7D8FF",
      },
      boxShadow: {
        glass: "0 24px 70px rgba(26, 26, 36, 0.08)",
        lift: "0 28px 80px rgba(26, 26, 36, 0.13)",
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
