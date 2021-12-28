import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const HomePage = ({ className }) => {
  
  
  const [saleProducts, setSaleProducts] = useState([]);

  // load products on sale on every page load
  useEffect(() => {
    axios.get('/')
    .then((res) => {
      console.log('res: ', res);
      // setSaleProducts(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []); 

  return ( 
    <div className={className}>
      <h1>Welcome to emoji mart!</h1>

      <section className="sale">
      <h4>Currently on sale</h4>
        {/* <div className="mapped-sale-products">
        {saleProducts.map(saleProduct => {
          <Product saleProduct={saleProduct} saleProducts={saleProducts}/>
        })}</div> */}
      </section>

       <section className="featured">
        <h4>Featured products</h4>
      </section>
    </div>
   );
}
 
export default HomePage;