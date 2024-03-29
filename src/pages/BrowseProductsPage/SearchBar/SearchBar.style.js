import styled from "styled-components";
import Searchbar from "./Searchbar";
import { colors } from "../../../variables";

export const StyledSearchBar = styled(Searchbar)`
  width: 100vw;

  label {
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
  }

  input {
    height: 45px;
    max-width: 60%;
    margin-top: 20px;
    width: 300px;
    height: 38px;
    border: none;
    border-radius: 4px;
    padding-left: 10px;

    &::placeholder {
      font-size: 20px;
      color: black;
    }
  }

  button#search-btn {
    margin-left: 20px;
    width: 50px;
    height: 42px;
    background: none;
    transition: all 0.4s;
    border: solid 2px ${colors.primaryGreen};
    height: fit-content;
    width: fit-content;

    .icon {
      font-size: 30px;
      color: ${colors.primaryGreen};
      margin: 5px 5px 0 5px;
    }

    &:hover {
      background: ${colors.primaryGreen};
      transition: all 0.4s;

      & .icon {
        color: black;
      }
    }
  }
`;
