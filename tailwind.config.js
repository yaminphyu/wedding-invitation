/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF8578",
        secondary: "#353535",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        pulseOnce: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.8s ease-in-out forwards',
        'slide-out': 'slideOut 0.8s ease-in-out forwards',
        'pulse-once': 'pulseOnce 1s ease-in-out', // One-time pulse, no infinite loop
      },
    },
  },
  plugins: [],
};
