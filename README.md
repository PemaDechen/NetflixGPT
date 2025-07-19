# NETFLIX GPT 

1. Created React App using "create-react-app"
2. Configured TailWind by 
    1. `inline code npm install -D tailwindcss@3.4.1 postcss autoprefixer"=> installs tailwind, postcss and autoprefixer"` 
    2. "npx tailwindcss init -p // creates configuration files
    3. added `inline code @import "tailwindcss/base";@import "tailwindcss/components";@import "tailwindcss/utilities";" lines in index.css file` 
    4. Configure tailwind.config.js file to 
       `inline code /** @type {import('tailwindcss').Config} */  module.exports = { content: [ "./src/**/*.{js,jsx,ts,tsx}", ], theme: {extend: {},},plugins: [],}`
 ###### Something Crazy The project structure itself took me 1hour 20mins -wowow 
3. Imported "react-router-dom": "^7.7.0" for routing
4. Encountered Infinite Loop (Adding route inside the component itself)
5. Learnt how to access images (Inspect -img- search)
6. Build Logo and added gradient to it.
7. Created Sign In and Sign Up form (used same form using useState)
8. Form Validation and useRef Hook