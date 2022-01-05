import React from "react";

const Product = ({ saleProduct, className }) => {
  return (
    <div className={className}>
      <div className="product">
        <h5>{saleProduct.name}</h5>
        <div className="product-img">{saleProduct.image_path}</div>
        <div className="price">${saleProduct.price}</div>
        <button type="button" id="view">
          view
        </button>
      </div>
    </div>
  );
};

export default Product;
