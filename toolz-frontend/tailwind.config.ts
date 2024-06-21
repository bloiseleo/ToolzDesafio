import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  plugins: [],
  theme: {
    colors: {
      primary: '#ffffff',
      activeIndicator: '#ffffff',
      disableIndicator: '#222222',
      accent: '#0761E2',
      hoverAccent: '#3880e7',
      secundaryVariant: '#909090',
      black: '#000000',
      terciary: '#585858',
      borderColor: '#6A6A6A',
      captchaBorder: '#E0E0E0',
      captchaCheckboxBorder: '#C5C5C5',
      captchaHumanText: '#555555',
      backgroundDarkColor: '#232323',
      terciaryDark: '#909090',
      borderColorDark: '#5C5C5C',
      captcha: '#FAFAFA',
      errorColor: '#ef4444'
    }
  }
};
export default config;
