/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}"
  ],
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      m1: { max: "1140px" },
      m2: { max: "1090px" },
      m3: { max: "1024px" },
      m4: { max: "992px" },
      m5: { max: "960px" },
      m6: { max: "800px" },
      m7: { max: "935px" },
      m8: { max: "600px" },
      n1: "960px"
    }
  },
  plugins: []
};
