/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(244, 239, 233)",
        mainColor: "rgb(50, 74, 117)",
        mainColorHover: "rgb(79 108 161)",
      },

      height: {
        headerHeight: "75px",
      },
      padding: {
        headerHeight: "135px",
        headerHeightFull: "75px",
      },

      gridTemplateColumns: {
        travelPopular: "550px 1fr",
        travelPopularReverse: "1fr 485px",

        travelPopularTablet: "385px 1fr",
        travelPopularReverseTablet: "1fr 385px",

        someOfTheHotels: "repeat(auto-fit, minmax(260px, 1fr));",
        lbdOffer: "repeat(auto-fit, minmax(370px, 1fr));",
      },

      fontFamily: {
        montserrat: ["Montserrat"],
        kyiv: ["Kyiv"],
      },

      screens: {
        mobile: "460px",
        tablet: "768px",
        laptop: "1024px",
        largeDesktop: "1200px",
      },
    },
  },
  plugins: [],
};
