import styled from "styled-components";
import Footer from "../Footer";
import { fonts, colors } from "../../variables";

export const StyledFooter = styled(Footer)`
  border-top: solid ${colors.navbarBkgd} 3.5px;
  height: 70px;
  position: static;
  margin-top: 15vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: ${colors.navbarBkgd};

  & a,
  a:visited {
    color: black;
  }

  & a:hover {
    color: ${colors.primaryPink};
  }

  & div,
  a {
    font-size: 20px;
    margin-bottom: 10px;
    font-family: ${fonts.logoFont};
  }

  & .icon {
    font-size: 20px;
    margin-right: 15px;
    color: black;
  }
`;
