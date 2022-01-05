import styled from "styled-components";
import Products from "../Products";

export const StyledProducts = styled(Products)`
  margin: 50px 0 0 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 20px;
    height: 38px;
    border: none;
    border-radius: 4px;

    &::placeholder {
      color: #ab94fa;
      font-size: 23px;
      font-family: "Lato", sans-serif;
      padding-left: 10px;
    }
  }
`;
