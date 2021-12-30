import styled from "styled-components";
import Navbar from "../Navbar";
import { colors } from "./css-variables";

export const StyledNavbar = styled(Navbar)`
  background: ${colors.navbarBkgd};
  height: 110px;
  display: flex;
  align-items: baseline;
  padding: 10px 20px 10px 30px;

  #theme-toggle-btn {
    font-size: 24px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    background: none;
  }

  h1#logo {
    font-size: 30px;
    margin-top: 20px;
    color: black;
  }

  .links {
    display: flex;
    justify-content: space-between;
    width: 60vw;
    margin-left: 9vw;
    align-items: baseline;

    & a {
      text-decoration: none;
      font-size: 20px;

      &:hover {
        color: #c3ffda;
      }
    }
  }

  @media screen and (max-width: 630px) {
    div.links {
      display: none;
    }
  }
`;
