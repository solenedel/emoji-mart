import styled from "styled-components";
import HomePage from "./HomePage";

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
    color: red;
    font-size: 25px;
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
      padding: 20px;
      width: 100%;
      /* border: solid red 3px; */

      & .featured-img {
        font-size: 80px;
      }

      & div.price-name {
        display: flex;
        flex-direction: column;

        & h3 {
        font-size: 22px;
      }
        & div {
          font-size: 18px;
          margin-top: 10px;
        }
      }
    }

    & button#view {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 700px){
    h4 {
      font-size: 30px;
    }

     & div.featured-product {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      /* margin-top: 30px; */
      width: 100%;

      & h3 {
        font-size: 40px;
      }

      & .featured-img {
        font-size: 130px;
      }
      
       & button#view {
      font-size: 30px;
    }
  }
`;
