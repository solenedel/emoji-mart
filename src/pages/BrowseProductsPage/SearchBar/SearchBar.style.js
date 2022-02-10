import styled from "styled-components";
import Searchbar from "./Searchbar";

export const StyledSearchBar = styled(Searchbar)`
  width: 85vw;

  label {
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
  }

  input {
    height: 45px;
    width: 60%;
  }

  button#search-btn {
    margin-left: 20px;
    width: 50px;
    height: 42px;
    background: #9bffd7;
    padding: 8px;
    transition: background 0.4s;

    &:hover {
      background: #fffc99;
      transition: background 0.4s;
    }
  }
`;
