/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        invert: {
          css: {
            color: theme("colors.gray.300"),
            a: { color: theme("colors.blue.400") },
            strong: { color: theme("colors.white") },
            code: {
              backgroundColor: "#1e293b",
              padding: "2px 4px",
              borderRadius: "0.25rem",
              color: theme("colors.pink.400"),
            },
            pre: {
              backgroundColor: "#0f172a",
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
