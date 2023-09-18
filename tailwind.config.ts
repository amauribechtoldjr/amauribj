import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#fa8340",
        "primary-2": "#c86933",
        "primary-3": "#964f26",
        "primary-light-1": "#fb9c66",
        "primary-light-2": "#fcb58c",
        black: "#050301",
        white: "#fafafa",
      },
      fontFamily: {
        title: "kungfumaster",
      },
    },
  },
  plugins: [],
} satisfies Config;
