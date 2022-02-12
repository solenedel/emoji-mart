import styled from "styled-components";
import Product from "./Product";

export const StyledProduct = styled(Product)`
  min-width: 100px;

  div.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    & h5 {
      font-size: 22px;
      font-weight: 300;
    }

    & div.price {
      font-size: 23px;
      font-weight: 300;
    }

    & div.product-img {
      height: 70px;
      font-size: 50px;
      padding: 10px;
    }
  }
`;
