import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: black;
    color: white;
  }

  h1 {
    font-family: 'Jua', sans-serif;
  }

  h2, h3, h4, p {
    font-family: 'Share Tech Mono', monospace;
  }
`;