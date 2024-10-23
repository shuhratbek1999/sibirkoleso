const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Atyp: ['Atyp'],
        AtypBold: ['Atyp Bold'],
        AtypMed: ['Atyp-Medium'],
        AtypTB: ['Atyp-Text-Bold']
      },
      fontSize: {
        xz: ['0.56rem',{lineHeight: '1'}],
        xy: ['0.5rem',{lineHeight: '1'}],
        xx: ['0.62rem', {lineHeight: '1.5'}],
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xls: ['1rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '10xl': ['8.25rem', { lineHeight: '1.3', letterSpacing: '-0.001em' }],
      },
      screens: {
        xs: '480px', 
        xx: '360px',
        ll: '1600px',
        lx: '1024px'
      },
      borderWidth: {
        3: '3px',
        0.1: '1px',
        0.2: '0.5px'
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      height:{
        96: '22rem',
        98: '32rem',
        99: '22.125',
        100: '41rem',
        101: '44rem',
        125: '45rem',
        110: '35.5rem',
        15: '3.8125rem',
        97: "23.25rem",
        38: "9.4375rem",
        95: "23.875rem",
        94: "30.125rem",
        93: '30rem',
        92: '27.75rem',
        91: '26.25',
        90: '28.35rem',
        89: '24.75rem',
        17: '15rem',
        19: '16.3125rem',
        22: '5.5rem',
        21: '9.984rem',
        23: '12.51rem',
        25: '25rem',
        26: '26rem',
        18: '13.17rem',
        0.1: '0.125rem',
        0.2: '0.08rem',
        0.3: '0.0625rem'
      },
      minHeight:{
        101: '44rem',
        98: '32rem',
        102: '55rem',
        94: "27.5rem"
      },
      width:{
        130: '39.375rem',
        100: '65.625rem',
        101: '40rem',
        99: '37rem',
        98: '35rem',
        97: '33rem',
        102: '64rem',
        103: '31%',
        104: '45%',
        105: '47%',
        106: '49%'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
      },
      colors: {
        greys: '#F3F3F3',
        menuColor: '#282828',
        cityBg: '#E5E5E5',
        cityFot: '#282828',
        ffff: '#FFFFFF',
        eeee: '#EEEEEE'
      }
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};
