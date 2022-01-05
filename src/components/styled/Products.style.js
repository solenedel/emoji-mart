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
    height: 40px;
    margin: 0 0 0 15px;
  }

  section#browse-category {
    margin-top: 100px;
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

      & button {
        padding: 5px;
        transition: all 0.4s;

        &:hover {
          transform: scale(1.2, 1.2);
          transition: all 0.4s;
        }
      }

      button.plants {
        background-color: #d5feb7;
      }

      button.food {
        background-color: #fee6b7;
      }

      button.drinks {
        background-color: #b7e9fe;
      }
    }
  }

  /* div.product-results {
    border: solid red 3px;
    display: flex;

    
  } */
`;
