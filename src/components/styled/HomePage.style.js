import styled from "styled-components";
import HomePage from "../HomePage";

export const StyledHomePage = styled(HomePage)`
  margin: 50px 5% 0 5%;

  p {
    text-align: center;
    font-size: 27px;
    margin-bottom: 50px;
    font-weight: 300;
    color: #D7CCFC;
    font-family: 'Lato', sans-serif; 
  }

  h4 {
    font-weight: 300;
    height: 50px;
    padding: 7px 0 7px 20px;
  }

  .sale {
    border: solid 3px #FFC3E8;
    border-radius: 4px;
    margin-bottom: 80px;
    height: fit-content;

    & h4 {
      color: black;
      background: #FFC3E8;
      margin-bottom: 40px;
    }  

    div.mapped-products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 3% 0 3%;
    }

    div.product {
      margin-bottom: 20px;

      & h5 {
        font-size: 25px;
        font-family: 'Lato', sans-serif;
      }

      & div {
        font-size:23px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
      }

      & .product-img {
        font-size: 50px;
        padding: 10px;
      }
    
    }

  }
  
  .featured {
      border: solid 3px #B7FFFD;
      border-radius: 4px;
      height: 300px;

    & h4 {
      color: black;
      background: #B7FFFD;
    }
  }

  & button#view {
        margin: 15px 0 15px 0;
        padding: 5px;
        font-size: 22px;
        border: none;
        background: #1FDEAD;
        border-radius: 5px;
        color: black;
      }

 
`;