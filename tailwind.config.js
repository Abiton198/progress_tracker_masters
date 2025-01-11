
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"], // Include all relevant file extensions
  theme: {
    extend: {}, // Customize the theme here if needed
  },
  plugins: [], // Add plugins if required
  safelist: [
    {
      pattern: /^stroke-(red|yellow|blue|green)-500$/, // Safelist stroke classes used in ProgressBar
    },
  ],
};
