/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f5f7fb",
          100: "#dee7f4",
          200: "#b8cce8",
          300: "#8aaed8",
          400: "#5a86c2",
          500: "#3467a5",
          600: "#255088",
          700: "#1b416f",
          800: "#15345d",
          900: "#10284a",
          950: "#0b1f3a",
        },
        cyan: {
          50: "#e9f0ff",
          100: "#cfdeff",
          200: "#aac5ff",
          300: "#7da7ff",
          400: "#5b8eff",
          500: "#2f6bff",
          600: "#285ce0",
          700: "#214ec0",
          800: "#1b3f9e",
          900: "#173782",
          950: "#0f2454",
        },
        blue: {
          50: "#e9f0ff",
          100: "#cfdeff",
          200: "#aac5ff",
          300: "#7da7ff",
          400: "#5b8eff",
          500: "#2f6bff",
          600: "#2458dc",
          700: "#1f4ab8",
          800: "#1b3f97",
          900: "#163576",
          950: "#10264f",
        },
        premium: "#cfaf6e",
        neutral: "#f5f7fb",
        ink: "#111827",
      },
      animation: {
        bounce: "bounce 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(47, 107, 255, 0.4)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 0 8px rgba(47, 107, 255, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
