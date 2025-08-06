/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./examples/with-tailwind/**/*.{js,jsx,ts,tsx}",
    "./vite-demo/src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Glass effect colors
        'glass': {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
          600: 'rgba(255, 255, 255, 0.6)',
          700: 'rgba(255, 255, 255, 0.7)',
          800: 'rgba(255, 255, 255, 0.8)',
          900: 'rgba(255, 255, 255, 0.9)',
        },
        // Dark glass colors
        'glass-dark': {
          50: 'rgba(0, 0, 0, 0.05)',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
        // Chromatic aberration colors
        'chromatic': {
          red: '#ff0000',
          green: '#00ff00',
          blue: '#0000ff',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          yellow: '#ffff00',
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'glass-shimmer': 'shimmer 2s ease-in-out infinite alternate',
        'liquid-flow': 'liquid 3s ease-in-out infinite',
        'chromatic-shift': 'chromatic 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0',
            opacity: '0.8'
          },
          '100%': { 
            backgroundPosition: '200% 0',
            opacity: '1'
          }
        },
        liquid: {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            transform: 'translateY(-2px) scale(1.02)',
            filter: 'hue-rotate(180deg)'
          }
        },
        chromatic: {
          '0%': { 
            filter: 'hue-rotate(0deg) saturate(1)'
          },
          '33%': { 
            filter: 'hue-rotate(120deg) saturate(1.2)'
          },
          '66%': { 
            filter: 'hue-rotate(240deg) saturate(1.4)'
          },
          '100%': { 
            filter: 'hue-rotate(360deg) saturate(1)'
          }
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-strong': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        'glass-soft': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'chromatic': '0 0 20px rgba(255, 0, 0, 0.3), 0 0 40px rgba(0, 255, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.3)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'chromatic-gradient': 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff00ff)',
        'liquid-gradient': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
      }
    },
  },
  plugins: [
    // Custom plugin for glass morphism utilities
    function({ addUtilities, theme }) {
      const glassUtilities = {
        '.glass-morphism': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.glass-morphism-strong': {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        },
        '.glass-morphism-soft': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        },
        '.chromatic-border': {
          border: '1px solid transparent',
          background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff00ff) border-box',
        },
        '.liquid-effect': {
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          animation: 'liquid 3s ease-in-out infinite',
        }
      }
      addUtilities(glassUtilities)
    }
  ],
} 