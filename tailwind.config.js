module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
    {
    doctortheme: {
    primary: "#1ba370",
    secondary: "#90af64",
    accent: "#3A4256",
    neutral: "#3d4451",
    "base-100": "#ffffff",
    },
    },
    ],
  },
  plugins: [require("daisyui")],
}
