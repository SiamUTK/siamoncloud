/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        "space-dark": "#040b16",
        "space-light": "#0a192f",
        "neon-blue": "#00f2fe",
        "neon-cyan": "#4facfe",
      },
      spacing: {
        11: "2.75rem",
        22: "5.5rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 70% 30%, rgba(0, 242, 254, 0.15) 0%, rgba(4, 11, 22, 0) 50%)",
        "bottom-glow":
          "radial-gradient(circle at 50% 100%, rgba(79, 172, 254, 0.1) 0%, rgba(4, 11, 22, 0) 50%)",
      },
    },
  },
  plugins: [],
};
