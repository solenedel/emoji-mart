import styled from "styled-components";
import Navbar from "../Navbar";
import { colors } from "./css-variables";

export const StyledNavbar = styled(Navbar)`

  background: ${colors.navbarBkgd};
  height: 110px;
  display: flex;
  align-items: baseline;
  padding: 10px 20px 10px 30px;

  h1#logo {
    font-size: 30px;
    margin-top: 20px;
    color: black;
  }

  .links {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: space-between;
    width: 60vw;
    margin-left: 9vw;
    
    & a {
      text-decoration: none;
      font-size: 20px;

      &:hover {
        color: #C3FFDA;
      }
    } 
  }


   @media screen and (max-width: 630px) {

    div.links {  
      display: none;
    }
  }


`;