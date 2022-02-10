import styled from "styled-components";
import Searchbar from "./Searchbar";

export const StyledSearchBar = styled(Searchbar)`
  width: 85vw;

  button#search-btn {
    margin-left: 20px;
    width: fit-content;
    height: 40px;
    background: #9bffd7;
    padding: 5px;
    transition: background 0.4s;

    &:hover {
      background: #fffc99;
      transition: background 0.4s;
    }
  }
`;
