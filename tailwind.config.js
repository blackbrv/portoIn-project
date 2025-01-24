module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
