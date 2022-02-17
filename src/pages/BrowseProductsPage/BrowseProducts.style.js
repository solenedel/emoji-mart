import styled from "styled-components";
import { colors } from "../../variables";
import Products from "./BrowseProducts";

export const StyledBrowseProducts = styled(Products)`
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-left: 15px;
  }

  form#filter-form {
    border: solid 2.5px white;
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
        color: rgba(0, 0, 0, 0.8);
        letter-spacing: 1.5px;
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
    margin-top: 50px;
    font-size: 25px;
    font-weight: 600;
    width: 120px;
    height: 45px;
    border: solid 2px ${colors.primaryGreen};
    background: none;
    color: ${colors.primaryGreen};
    transition: all 0.4s;

    &:hover {
      background: ${colors.primaryGreen};
      color: black;
      transition: all 0.4s;
    }
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
      background-color: #ffd7d9;
    }
  }

  @media screen and (min-width: 400px) {
    form#filter-form {
      width: 80vw;
      padding-top: 50px;
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
      flex-direction: row;
      justify-content: space-evenly;
      align-items: baseline;

      & button#confirm-filters-btn {
        align-self: center;
        position: relative;
        letter-spacing: 1px;
        font-size: 30px;
        bottom: 15px;
        height: 60px;
        width: fit-content;
        padding: 10px;
      }
    }
  }
`;
