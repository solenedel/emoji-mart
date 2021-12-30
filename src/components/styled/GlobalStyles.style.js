import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-family: 'Share Tech Mono', monospace;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }


  h1 {
    font-family: 'Jua', sans-serif;
    font-size: 50px;
  }

`;
