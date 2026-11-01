module.exports = {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './constants.tsx'],
  theme: {
    container: { center: true, padding: '1.5rem', screens: { xl: '1280px', '2xl': '1280px' } },
    extend: {
      fontFamily: { sans: ['Manrope','Arial','sans-serif'] },
      colors: { red: { 50:'#fff2ef',100:'#f9e0d9',200:'#efb4a9',500:'#d84034',600:'#c5362b',700:'#a92d25',800:'#8e261f' }, slate: { 50:'#f5f4f0',100:'#efeee8',200:'#deddd6',300:'#c5c3bb',400:'#a4a39a',500:'#74756e',600:'#5e605b',700:'#444840',800:'#2c312b',900:'#20251f' } },
    },
  },
  plugins: [],
};
