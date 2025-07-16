# NETFLIX GPT 

1. Created React App using "create-react-app"
2. Configured TailWind by 
    2.1. "npm install -D tailwindcss@3.4.1 postcss autoprefixer" 
            = installs tailwind, postcss and autoprefixer
    2.2. "npx tailwindcss init -p // creates configuration files
    2.3. added "@import "tailwindcss/base";
                @import "tailwindcss/components";
                @import "tailwindcss/utilities";" 
                lines in index.css file" 
    2.4. Configure tailwind.config.js file to 
       `inline code` /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }
 ### Somthing Crazy The project structure itself took me 1hour 20mins -wowow 
