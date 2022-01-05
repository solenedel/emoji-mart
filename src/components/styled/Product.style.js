import styled from "styled-components";
import Product from "../Product";

export const StyledProduct = styled(Product)`
  div.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    & h5 {
      font-size: 22px;
      font-weight: 300;
      font-family: "Lato", sans-serif;
    }

    & div.price {
      font-size: 23px;
      font-family: "Lato", sans-serif;
      font-weight: 300;
    }

    & div.product-img {
      font-size: 50px;
      padding: 10px;
    }
  }
`;
