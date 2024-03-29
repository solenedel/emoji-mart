import styled from "styled-components";
import Navbar from "../Navbar";
import { colors } from "../../variables";

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
    margin: 0 10% 0 35%;
    align-self: flex-end;

    & .icon {
      color: black;
      font-size: 40px;
    }
  }

  #theme-toggle-btn {
    font-size: 24px;
    border: none;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    background: none;
    font-weight: 300;
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

       .icon {
         font-size: 40px;
       }
     }

    & a {
      text-decoration: none;
      color: white;
      margin-top: 20px;
      font-size: 24px;
      font-weight: 200;

      &:hover {
        color: #A9A9FF;
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

  @media screen and (min-width: 460px) {

    button#hamburger-btn {
    margin-left: 70%;
     }
  }
 
`;
