import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.foreground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Roboto', sans-serif;
  }
`;
 
export default GlobalStyle;