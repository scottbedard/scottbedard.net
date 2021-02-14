module.exports = {
  darkMode: false,
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          '50': 'rgba(0, 0, 0, 0.5)'
        }
      },
      fontFamily: {
        sans: 'Quicksand, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      }
    }
  }
}
