/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#0ea5e9', // Sky blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Violet
          600: '#7c3aed',
          700: '#6d28d9',
        },
        surface: '#000000',      // Pure black
        'surface-2': '#09090b',  // Zinc 950
        'surface-3': '#18181b',  // Zinc 900
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #030712 50%, #000000 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(20,20,22,0.8) 0%, rgba(10,10,12,0.9) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(14,165,233,0.15) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'gradient-x': 'gradientX 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
        'card': '0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(14, 165, 233, 0.15), 0 4px 24px rgba(0,0,0,0.5)',
        'glow-cyan': '0 0 40px rgba(14, 165, 233, 0.4)',
        'glow-teal': '0 0 40px rgba(45, 212, 191, 0.4)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
