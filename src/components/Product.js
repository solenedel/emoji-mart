import React from "react";

const Product = ({ saleProducts, saleProduct }) => {

  return ( 
  <div className="sale-product">
    <h5>{saleProduct.name}</h5>
    <div className="product-img">{saleProduct.image_path}</div>
    <div>${saleProduct.price}</div>
    <div className="description">{saleProduct.description}</div>
    
  </div> 
  );

}
 
export default Product;