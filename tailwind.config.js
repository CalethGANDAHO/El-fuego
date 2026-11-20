/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#140d09',
        foreground: '#fdfaf7',
        primary: {
          DEFAULT: '#e8480c',
          foreground: '#ffffff',
          hover: '#cf3d07',
        },
        fuego: '#e8480c',
        exotik: '#2b873a',
        gold: '#f59e0b',
        secondary: {
          DEFAULT: '#221710',
          foreground: '#f5ebe1',
        },
        card: {
          DEFAULT: '#1c130d',
          foreground: '#fdfaf7',
        },
        muted: {
          DEFAULT: '#2a1b13',
          foreground: '#bba798',
        },
        border: '#3a271c',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'flame-pulse': {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 12px rgba(232,72,12,0.4))' },
          '50%': { transform: 'scale(1.05)', filter: 'drop-shadow(0 0 24px rgba(232,72,12,0.8))' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'flame-pulse': 'flame-pulse 3s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
