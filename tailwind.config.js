/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // 프로젝트 루트의 HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내 모든 React 관련 파일
    "./src/apps/**/*.{js,ts,jsx,tsx}", // apps 폴더 내 React 파일들
    "./src/assets/**/*.{css}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


