/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "#272b37",
        bg2: "#29282e",
        mainColor: "#131f5b",
        mainColorHover: "rgb(79 108 161)",
        "primary-100": "#9593b4",
        "primary-20": "#324a75"
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
