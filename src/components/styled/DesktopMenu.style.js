import styled from "styled-components";
import DesktopMenu from "../DesktopMenu";

export const StyledDesktopMenu = styled(DesktopMenu)`
  // desktop navbar bug
  /* border: solid rgba(0, 0, 0, 0) 1px; */

  @media screen and (min-width: 950px) {
    .desktop-links {
      margin-left: 10vw;
      width: 70vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & a {
        text-decoration: none;
        color: white;
        margin-top: 20px;
        font-size: 22px;

        &:hover {
          color: #fefe8a;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .links a {
      font-size: 22px;
    }
  }
`;
