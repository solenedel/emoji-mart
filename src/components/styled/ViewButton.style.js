import styled from "styled-components";
import { colors } from "../../variables";
import ViewButton from "../ViewButton";

export const StyledViewButton = styled(ViewButton)`
  background: ${colors.primaryBlue};
  border: solid red 3px;
  margin: 15px 0 15px 0;
  padding: 5px;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;

  & a {
    color: black;
  }

  :hover {
    background: ${colors.hoverBlue};
    transition: background 0.3s;
  }
`;
