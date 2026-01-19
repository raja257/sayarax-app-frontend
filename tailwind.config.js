/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3B",        // Dark navy (for text & important headings)
        secondary: "#FFB800",      // Vibrant gold (for highlights, buttons, active nav)
        accent: "#1EB980",         // Fresh green (success, accents)
        danger: "#E53E3E",         // Red for errors
        background: "#f9fafb",     // Light gray background
        card: "#FFFFFF",            // White cards / panels
        gradientStart: "#4F46E5",  // Indigo for gradient header
        gradientMiddle: "#8B5CF6", // Purple for gradient header
        gradientEnd: "#EC4899",    // Pink for gradient header
      },
    },
  },
  plugins: [],
};
