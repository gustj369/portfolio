/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#f5d78e",
          400: "#e8c86d",
          500: "#d4a843",
          600: "#b8912a",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b6fe8",
          600: "#7c5fd4",
        },
        // 보조 텍스트용 회색을 다크 배경(#0a0a0a~#111) 기준 WCAG AA(4.5:1) 이상으로 밝게 조정
        // 기본값 대비: 500 #6b7280(4.1:1) → 6.0:1, 600 #4b5563(2.6:1) → 4.7:1
        gray: {
          500: "#8b929e",
          600: "#787f8b",
        },
        dark: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2d2d2d",
          400: "#3d3d3d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

