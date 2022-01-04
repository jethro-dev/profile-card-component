module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        "font-size-name-stats": "18px",
      },
      backgroundImage: {
        "main-bg": "url('/public/images/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
