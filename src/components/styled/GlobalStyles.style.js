import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: black;
    color: white;
    font-size: 30px;
    font-family: 'Share Tech Mono', monospace;
  }

  h1 {
    font-family: 'Jua', sans-serif;
    font-size: 50px;
  }

`;