# Q.1 Explore all the ways of writting css

# Q.2 How do we configure tailwind
    1.Start by installing Tailwind CSS using a package manager 
        npm install tailwindcss

    2.you need to generate the configuration files for Tailwind CSS
        npx tailwindcss init
    
    3.customize the settings in tailwind.config.js file according to your needs.

    4.Apply Tailwind utility classes directly in your HTML/jsx.

    5.Include Tailwind CSS in Your Styles
        /* styles.css */
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';



# Q.3 In tailwind.config.js , what does all the keys mean (content, theme, extend, plugins)?

    1.theme: Customize design system values like colors, fonts, spacing, etc.

    2.extend: Add or modify Tailwind's default utility classes.

    3.plugins: Integrate third-party or custom plugins to enhance Tailwind.

    4.content: Specify files for Tailwind to analyze and generate classes from.

# Q.4 why do we have .postcssrc file?
     Tailwind CSS uses postcss behind the scenes , it is a tool for transforming css with js  
     parcel need .postcssrc to read tailwind (what is written inside tailwind)