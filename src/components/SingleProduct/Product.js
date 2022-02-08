import React from "react";
import ViewButton from "../ViewButton";

const Product = ({ saleProduct, className }) => {
  return (
    <div className={className}>
      <div className="product">
        <h5>{saleProduct.name}</h5>
        <div className="product-img">{saleProduct.image_path}</div>
        <div className="price">${saleProduct.price}</div>
        <ViewButton productName={saleProduct.name} />
      </div>
    </div>
  );
};

export default Product;
