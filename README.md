// commands
- npm create vite@latest MyProject -- --template react
- npm install
- npm run dev
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

// other steps
- change name to tailwind.config.csj

- copy and paste :
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

- copy these in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;



