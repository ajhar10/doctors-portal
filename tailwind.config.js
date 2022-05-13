module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bannar-bg': "url('/src/assets/images/bg.png')",
        'appoinment-bg': "url('/src/assets/images/appointment.png')",

      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
