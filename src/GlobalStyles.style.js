import { createGlobalStyle } from "styled-components";
import { fonts } from "./variables";

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-family: ${fonts.mainFont}
  }

  a, a:hover, a:visited {
    text-decoration: none;
    font-weight: 300;
  }

   button:hover, a:hover {
    cursor: pointer;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    height: 100vh;
    overflow-x: hidden;
    font-family: ${fonts.mainFont};
  }

  h1 {
    font-family: ${fonts.logoFont};
    font-size: 50px;
  }

  button {
    border: none;
    border-radius: 5px;
  }
     
  div.mapped-products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 3% 0 3%;
    }
`;
