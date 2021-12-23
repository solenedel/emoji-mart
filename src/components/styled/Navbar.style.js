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
    margin-top: 20px;
    color: black;
  }

  .links {
    display: flex;
    align-items: flex-end;
  }


`;