import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  body {
    ${theme.fontFamily.base};
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};

    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  h1 {
    ${theme.typography.h1};
  }
  h2 {
    ${theme.typography.h2};
  }
  h3 {
    ${theme.typography.h3};
  }
  h4 {
    ${theme.typography.h4};
  }
  h5 {
    ${theme.typography.h5};
  }
`;

export default GlobalStyle;
