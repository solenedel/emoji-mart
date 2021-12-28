import styled from "styled-components";
import HomePage from "../HomePage";

export const StyledHomePage = styled(HomePage)`
  margin: 50px 5% 0 5%;
  
  h1 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 50px;
    letter-spacing: 3px;
    font-weight: 100;
    color: #D7CCFC;
  }

  h4 {
    font-weight: 300;
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

    div.mapped-sale-products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 3% 0 3%;
    }

    div.sale-product {
      margin-bottom: 20px;
      
      & h5 {
        font-size: 28px;
        font-family: 'Lato', sans-serif;
      }

      & div {
        font-size:23px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
      }

      & .product-img {
        font-size: 50px;
      }
      
      /* border: solid red 3px; */
    }
  }
  
  .featured {
      border: solid 3px #B7FFFD;
      border-radius: 4px;

    & h4 {
      color:#B7FFFD;
    }
  }


 
`;