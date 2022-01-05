import styled from "styled-components";
import Products from "../Products";

export const StyledProducts = styled(Products)`
  margin: 50px 0 0 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-top: 20px;
    width: 300px;
    height: 38px;
    border: none;
    border-radius: 4px;
    padding-left: 10px;
    font-family: "Lato", sans-serif;

    &::placeholder {
      color: #ab94fa;
      font-size: 23px;
    }
  }
  button {
    background: pink;
    border: none;
    border-radius: 4px;
    height: 38px;
    margin: 0 0 0 15px;
  }

  section#browse-category {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
      margin-bottom: 50px;
    }

    div.category-buttons {
      width: 80vw;
      display: flex;
      justify-content: space-around;
    }
  }
`;
