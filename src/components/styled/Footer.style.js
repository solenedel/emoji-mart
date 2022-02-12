import styled from "styled-components";
import Footer from "../Footer";
import { fonts, colors } from "../../variables";

export const StyledFooter = styled(Footer)`
  border-top: solid ${colors.navbarBkgd} 3.5px;
  height: 100px;
  position: static;
  margin-top: 10vh;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & a,
  a:visited {
    color: #c3ffce;
  }

  & a:hover {
    color: #ffc3f4;
  }

  & div,
  a {
    font-size: 20px;
    margin-bottom: 10px;
    font-family: ${fonts.logoFont};
  }

  & .icon {
    font-size: 20px;
    margin-right: 8px;
    color: #c3ffce;
  }

  & div.credits {
    display: flex;

    & a {
      margin: 0 15px 0 10px;
    }
  }

  @media screen and (min-width: 800px) {
    padding-top: 30px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
