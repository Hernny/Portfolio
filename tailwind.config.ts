import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand semantic palette (marketing + personality)
        // Core energy: Cerulean / Electric accent evokes clarity, tech, trust, action
        primary: {
          DEFAULT: '#0EA5E9', // base accent
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E'
        },
        // Supporting accent: Ember (controlled passion / Aries fire) used sparingly for highlights
        ember: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
            500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        },
        // Neutral surfaces (light & dark handled via CSS variables but keep fallbacks)
        surface: {
          light: '#FFFFFF',
          dark: '#0B1220'
        },
        ink: {
          light: '#1E293B',
          dark: '#F1F5F9'
        }
      },
    },
  },
  plugins: [],
};

export default config;
