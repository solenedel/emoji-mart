import styled from "styled-components";
import { colors } from "../../variables";
import ViewButton from "../ViewButton";

export const StyledViewButton = styled(ViewButton)`
  background: ${colors.primaryBlue};
  transition: background 0.3s;
  height: fit-content;
  margin-top: 10px;
  padding: 0 5px 3px 5px;

  & a {
    color: black;
    font-size: 20px;
    font-weight: 400;
  }

  :hover {
    background: ${colors.hoverBlue};
    transition: background 0.3s;
  }
`;
