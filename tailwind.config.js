/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      lineHeight: "140%",
      Size12: "12px",
      Size14: "14px",
      Size16: "16px",
    },
    extend: {
      colors: {
        "figmaBlueDark": "#1E6F9F",
        "figmaBlueLight": "#4EA8DE",
        "figmaPurpleDark": "#5E60CE",
        "figmaPurpleLight": "#8284FA",
        "figmaFeedBack": "#E25858",
        "figmaGray700": "#0D0D0D",
        "figmaGray600": "#1A1A1A",
        "figmaGray500": "#262626",
        "figmaGray400": "#333333",
        "figmaGray300": "#808080",
        "figmaGray200": "#D9D9D9",
        "figmaGray100": "#F2F2F2",

      }
    },
  },
  plugins: [],
}

