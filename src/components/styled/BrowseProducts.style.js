import styled from "styled-components";
import Products from "../BrowseProducts";

export const StyledBrowseProducts = styled(Products)`
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.filters {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    border: solid #94e5fc 2px;
    width: 80vw;
    margin-top: 80px;
    padding: 20px;
  }

  section#browse-category {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h4 {
      margin-top: 60px;
    }

    div.category-buttons {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 30px 20px;

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

  button#confirm-filters-btn {
    margin-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & h4 {
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

  form#filter-form {
    border-radius: 5px;
    padding: 20px;
    display: flex;

    & input {
      width: 100px;
      margin-left: 10px;
    }
  }

  @media screen and (min-width: 900px) {
    border: solid red 3px;

    div.filters {
      border: none;
      padding: 10px;
    }

    form#filter-form {
      padding-top: none;
      flex-direction: row;
      align-items: center;
    }

    /* & h4 {
      margin-top: 0;
    } */
  }
`;
