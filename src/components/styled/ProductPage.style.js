import styled from "styled-components";
import ProductPage from "../ProductPage";

export const StyledProductPage = styled(ProductPage)`
  margin: 70px 0 0 0;
  display: flex;
  justify-content: center;

  & div {
    font-family: "Lato", sans-serif;
  }

  div#product-image {
    font-size: 120px;
    margin: 20px;
  }

  h1#product-name {
    font-size: 45px;
    margin: 20px;
    font-family: "Share Tech Mono", monospace;
  }

  div#sale-status {
    color: #ff8888;
  }

  div.buttons {
    display: flex;
    flex-direction: column;
  }
`;
