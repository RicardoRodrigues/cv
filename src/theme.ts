import {transparentize} from 'polished';

const primary = '#08C';
const secondary = '#515052';
const terciary = '#191A21';

const white = '#FFFFFF';
const lightGray = '#EEEEEE';

const theme = {
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    background: {
      body: white,
      secondary: primary,
      terciary: lightGray
    },
    text: {
      primary: terciary,
      secondary: primary,
      terciary: white
    },
    button: {
      primary: {
        normal: terciary,
        hover: primary
      },
      secondary: {
        normal: terciary,
        hover: primary
      }
    }
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  fontFamily: {
    logo: {
      'font-family': '"Pacifico", cursive'
    },
    base: {
      'font-family': '"PT Sans Narrow", sans-serif'
    }
  },
  typography: {
    h1: {
      'font-weight': 'bold',
      'font-size': '68px',
    },
    h2: {
      'font-weight': 'bold',
      'font-size': '50px',
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '38px',
    },
    h4: {
      'font-weight': 'bold',
      'font-size': '28px',
    },
    h5: {
      'font-weight': 'bold',
      'font-size': '24px',
    },
    body: {
      'font-weight': 'normal',
      'font-size': '20px',
    },
    small: {
      'font-weight': 'normal',
      'font-size': '18px',
    }
  },
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1620
  }
};

export default theme;
