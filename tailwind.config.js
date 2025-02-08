/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      animation: {
        float1: "float 3s ease-in-out infinite",
        float2: "float 3s ease-in-out infinite 1s",
        float3 : "float 3s ease-in-out infinite 2s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}

