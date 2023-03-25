/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
        },
      },
      backgroundImage: (theme) => ({
        'header-desktop': "url('../images/bg-intro-desktop.svg')",
        'header-mobile': "url('../images/bg-intro-mobile.svg')",
        'image-mockups': "url('../images/image-mockups.png')",
      }),
      backgroundSize: {
        'custom-mobile-header-size': '100% 50%',
        'custom-mobile-mockup-size': 'auto 60%',
      },
    },
  },
  plugins: [],
}
