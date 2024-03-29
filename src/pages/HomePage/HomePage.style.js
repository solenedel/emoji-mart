import styled from "styled-components";
import HomePage from "./HomePage";
import { colors } from "../../variables";

export const StyledHomePage = styled(HomePage)`
  margin: 50px 5% 0 5%;


  .icon {
    margin-right: 10px;
  }

  p {
    text-align: center;
    font-size: 27px;
    margin-bottom: 50px;
    font-weight: 300;
    color: white;
  }

  h4 {
    font-weight: 300;
    height: 50px;
    padding: 7px 0 7px 20px;
    color: red;
    font-size: 25px;
  }

  .sale {
    border: solid 3px ${colors.lightPurple};
    border-radius: 4px;
    margin-bottom: 80px;
    height: fit-content;

    & h4 {
      color: black;
      background: ${colors.lightPurple};
      margin-bottom: 40px;
    }
  }

  .featured {
    border: solid 3px ${colors.lightPurple};
    border-radius: 4px;
    height: fit-content;

    & h4 {
      color: black;
      background: ${colors.lightPurple};
    }

    & div.featured-product {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      width: 100%;

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
