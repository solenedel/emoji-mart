import styled from "styled-components";
import Products from "./BrowseProducts";

export const StyledBrowseProducts = styled(Products)`
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    font-size: 20px;
  }

  h3 {
    margin-left: 15px;
  }

  form#filter-form {
    width: 100vw;
    display: flex;
    align-items: center;

    & h4 {
      font-size: 24px;
    }

    & div#price-filter-section {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;

      & label {
        font-size: 27px;
      }

      & ::placeholder {
        font-size: 22px;
        padding-left: 10%;
      }
    }
  }

  div#browse-category {
    display: flex;
    flex-direction: column;
    align-items: center;

    div.category-buttons {
      padding: 5px;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 15px;
    }

    & button {
      transition: all 0.4s;
      background: #fffbaf;
      font-size: 21px;
      width: 70px;
      height: 40px;

      &:hover {
        transform: scale(1.1, 1.1);
        transition: all 0.4s;
      }
    }
  }

  button#confirm-filters-btn {
    margin-top: 30px;
    font-size: 25px;
    font-weight: 600;
    width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  & h4 {
    margin-bottom: 30px;
    font-size: 38px;
  }

  button {
    background: pink;
    border: none;
    border-radius: 4px;
    height: 40px;
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
      height: 35px;
      margin-left: 10px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      background-color: #c8fffc;
    }
  }

  @media screen and (min-width: 900px) {
    h3 {
      text-align: center;
    }
    div.filters {
      border: none;
      padding: 10px;
      margin-top: 0;
    }
    form#filter-form {
      padding-top: none;
      flex-direction: row;
      align-items: center;
    }
  }
`;
