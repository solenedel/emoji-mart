import styled from "styled-components";
import DesktopMenu from "../DesktopMenu";

export const StyledDesktopMenu = styled(DesktopMenu)`
  // desktop navbar bug
  /* border: solid rgba(0, 0, 0, 0) 1px; */

  .links {
    margin-bottom: 40px;
    width: 80vw;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  @media screen and (max-width: 1000px) {
    .links a {
      font-size: 22px;
    }
  }
`;
