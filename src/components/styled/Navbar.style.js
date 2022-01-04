import styled from "styled-components";
import Navbar from "../Navbar";
import { colors } from "./css-variables";

export const StyledNavbar = styled(Navbar)`
  background: ${colors.navbarBkgd};
  height: 110px;
  display: flex;
  align-items: baseline;
  padding: 10px 20px 10px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button#hamburger-btn {
    background: none;
    border: none;
    margin: 0 10% 0 70%;

    & i.fa-bars {
      color: black;
      font-size: 40px;
    }
  }

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
    padding: 40px 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

     & button#quit-menu {
       align-self: flex-end;
       padding-right: 50px;
       color: white;
       background: none;
       border: none;

       i {
         font-size: 40px;
       }
     }

    & a {
      text-decoration: none;
      color: white;
      margin-top: 20px;
      font-size: 24px;

      &:hover {
        color: #c3ffda;
      }
    }

    & #theme-toggle-btn {
      margin-top: 20px;
    }
  }

  #mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    height: 100vh;
    width: 80vw;
    z-index: 20;
  }

  #menu-mask {
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    height: 100vh;
    width: 20vw;
    z-index: 20;
    } 
  }

`;
