import styled from "styled-components";
import Searchbar from "./Searchbar";

export const StyledSearchBar = styled(Searchbar)`
  width: 85vw;

  button#search-btn {
    margin-left: 20px;
    width: fit-content;
    height: fit-content;
    background: none;

    & i {
      color: white;
      font-size: 40px;
    }
  }
`;
