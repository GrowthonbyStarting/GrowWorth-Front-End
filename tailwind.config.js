const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [
    require('flowbite/plugin')
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: { 50: '#ED6D52', 100: '#ED6D52', 200: '#ED6D52', 300: '#ED6D52', 400: '#ED6D52', 500: '#ED6D52', 600: '#ED6D52', 700: '#ED6D52', 800: '#ED6D52', 900: '#ED6D52' },
        white: { 50: '#F7F7F7', 100: '#F7F7F7', 200: '#F7F7F7', 300: '#F7F7F7', 400: '#F7F7F7', 500: '#F7F7F7', 600: '#F7F7F7', 700: '#F7F7F7', 800: '#F7F7F7', 900: '#F7F7F7' },
      }
    }
  }
};

module.exports = config;