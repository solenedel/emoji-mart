import styled from "styled-components";
import Products from "../BrowseProducts";

export const StyledBrowseProducts = styled(Products)`
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

  & h3 {
    margin-bottom: 30px;
    font-size: 38px;
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
    border-top: solid white 2px;
    padding-top: 30px;
    margin-top: 150px;
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

  div.product-results {
    margin: 80px 0 0 12%;
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    width: 75vw;
  }

  div#no-results-found {
    margin-top: 60px;
    color: #fc94a4;
  }
`;
