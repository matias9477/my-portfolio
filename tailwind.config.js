module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./content/**/*.{mdx,md}",
    ],
    darkMode: "class",
    theme: { extend: {} },
    plugins: [require("@tailwindcss/typography")],
  };
  