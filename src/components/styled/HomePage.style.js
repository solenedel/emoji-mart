import styled from "styled-components";
import HomePage from "../HomePage";

export const StyledHomePage = styled(HomePage)`
  margin: 50px 5% 0 5%;

  p {
    text-align: center;
    font-size: 27px;
    margin-bottom: 50px;
    font-weight: 300;
    color: white;
    font-family: "Lato", sans-serif;
  }

  h4 {
    font-weight: 300;
    height: 50px;
    padding: 7px 0 7px 20px;
  }

  .sale {
    border: solid 3px #ffc3e8;
    border-radius: 4px;
    margin-bottom: 80px;
    height: fit-content;

    & h4 {
      color: black;
      background: #ffc3e8;
      margin-bottom: 40px;
    }

    div.mapped-products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 3% 0 3%;
    }

    div.product {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      margin-bottom: 20px;
      /* border: solid red 3px; */

      & h5 {
        font-size: 22px;
        font-weight: 300;
        font-family: "", sans-serif;
      }

      & div.price {
        font-size: 23px;
        font-family: "Lato", sans-serif;
        font-weight: 300;
      }

      & .product-img {
        font-size: 50px;
        padding: 10px;
      }
    }
  }

  .featured {
    border: solid 3px #b7fffd;
    border-radius: 4px;
    height: fit-content;

    & h4 {
      color: black;
      background: #b7fffd;
    }

    & div.featured-product {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-top: 30px;

      /* border: solid red 4px; */

      & h3 {
        font-size: 40px;
      }

      & .featured-img {
        font-size: 130px;
      }

      & div.price-name {
        display: flex;
        flex-direction: column;
      }
    }

    & button#view {
      font-size: 35px;
    }
  }

  & button#view {
    margin: 15px 0 15px 0;
    padding: 5px;
    font-size: 22px;
    border: none;
    background: #1fdead;
    border-radius: 5px;
    color: black;
    transition: background 0.3s;

    :hover {
      background: #ffa1b9;
      transition: background 0.3s;
    }
  }
`;
