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
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    height: 100vh;
  }


  h1 {
    font-family: 'Jua', sans-serif;
    font-size: 50px;
  }

  button:hover, a:hover {
    cursor: pointer;
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

    & button#view {
    margin: 15px 0 15px 0;
    padding: 5px;
    font-size: 22px;
    border: none;
    background: #1fdead;
    border-radius: 5px;
    transition: background 0.3s;

    & a {
       color: black;
    }

    :hover {
      background: #ffa1b9;
      transition: background 0.3s;
    }
  }
`;
