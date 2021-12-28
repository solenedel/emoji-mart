import React from "react";

const Product = ({ saleProducts, saleProduct }) => {

  return ( 
  <div className="sale-product">
  {console.log('sale product in product ', saleProduct)}
    <h4>{saleProduct.name}</h4>
  </div> 
  );

}
 
export default Product;