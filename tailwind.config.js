module.exports = {
  darkMode: false,
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin 1s linear infinite reverse',
      },
      colors: {
        dark: {
          '0': 'rgba(0, 0, 0, 0)',
          '10': 'rgba(0, 0, 0, 0.1)',
          '25': 'rgba(0, 0, 0, 0.25)',
          '50': 'rgba(0, 0, 0, 0.5)',
          '75': 'rgba(0, 0, 0, 0.75)',
          '100': 'rgba(0, 0, 0, 1)',
        },
        light: {
          '0': 'rgba(255, 255, 255, 0)',
          '10': 'rgba(255, 255, 255, 0.1)',
          '25': 'rgba(255, 255, 255, 0.25)',
          '50': 'rgba(255, 255, 255, 0.5)',
          '75': 'rgba(255, 255, 255, 0.75)',
          '100': 'rgba(255, 255, 255, 1)',
        },
      },
      fontFamily: {
        sans: 'Quicksand, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
      maxWidth: {
        '1/2': '50%',
        '2/3': '66.7%',
      },
      padding: {
        full: '100%'
      }
    }
  }
}
