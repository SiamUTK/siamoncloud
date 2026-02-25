/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
            boxShadow: "0 0 0 0 rgba(6, 182, 212, 0.4)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 0 8px rgba(6, 182, 212, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
