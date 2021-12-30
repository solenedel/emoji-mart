import React from "react";

const Product = ({ saleProduct }) => {
  return (
    <div className="product">
      <h5>{saleProduct.name} </h5>
      <div className="product-img">{saleProduct.image_path}</div>
      <div>${saleProduct.price}</div>
      <button type="button" id="view">
        view
      </button>
    </div>
  );
};

export default Product;
