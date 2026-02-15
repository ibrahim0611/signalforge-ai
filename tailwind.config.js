/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#060b18',
          dark: '#030508',
          light: '#0f1729'
        },
        accent: {
          blue: '#3b82f6',
          purple: '#9333ea',
          'blue-light': '#60a5fa',
          'purple-light': '#a855f7'
        },
        glass: {
          DEFAULT: 'rgba(15, 23, 42, 0.7)',
          light: 'rgba(30, 41, 59, 0.5)',
          border: 'rgba(255, 255, 255, 0.1)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px',
        glass: '12px'
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'candlestick': 'candlestick 3s ease-in-out infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        candlestick: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '0.3' },
          '50%': { transform: 'scaleY(1.5)', opacity: '0.6' }
        }
      }
    }
  },
  plugins: []
};