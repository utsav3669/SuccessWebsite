/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sec: {
          red: "#E02030",
          "red-dark": "#B81726",
          navy: "#2B4292",
          "navy-dark": "#1D2F6F",
          offwhite: "#F9FAFB",
          "gray-light": "#E5E7EB",
          dark: "#18181B",
          muted: "#71717A",
          gold: "#D6A62E",
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "Satoshi", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        poppins: ["var(--font-satoshi)", "Satoshi", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        inter: ["var(--font-satoshi)", "Satoshi", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["var(--font-satoshi)", "Satoshi", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-satoshi)", "Satoshi", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        btn: "0px",
        input: "0px",
        card: "0px",
        img: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px", // except avatars where strictly necessary
      },
      boxShadow: {
        none: "none",
        subtle: "none",
        card: "none",
        hover: "none",
        modal: "0 20px 40px -10px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
