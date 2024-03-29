import styled from "styled-components";
import ProductPage from "./ProductPage";

export const StyledProductPage = styled(ProductPage)`
  margin: 70px 0 0 0;
  display: flex;
  justify-content: center;

  & div {
  }

  div#product-image {
    font-size: 120px;
    margin: 20px;
  }

  h1#product-name {
    font-size: 45px;
    margin: 20px;
  }

  div#sale-status {
    color: #ff8888;
  }

  div.buttons {
    display: flex;
    flex-direction: column;

    & button {
      padding: 5px;
      margin-bottom: 25px;
      text-align: left;
      width: fit-content;
    }

    & .icon {
      margin-right: 10px;
    }

    & #add-to-fav-btn {
      background: #ffabc2;
    }

    & #add-to-cart-btn {
      background: #abcfff;
    }
  }
`;
