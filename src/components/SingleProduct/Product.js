import React from "react";
import { StyledViewButton } from "../styled/ViewButton.style";

const Product = ({ saleProduct, className }) => {
  return (
    <div className={className}>
      <div className="product">
        <h5>{saleProduct.name}</h5>
        <div className="product-img">{saleProduct.image_path}</div>
        <div className="price">${saleProduct.price}</div>
        <StyledViewButton productName={saleProduct.name} />
      </div>
    </div>
  );
};

export default Product;
