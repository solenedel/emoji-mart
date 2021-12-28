import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`; 

const HomePage = ({ className }) => {
  
  const [saleProducts, setSaleProducts] = useState([]);

  // load products on sale on every page load
  useEffect(() => {
    axios.get(baseURL + '/')
    .then((res) => {
      console.log('AXIOS GET - SALE PRODUCTS: ', res.data);
      setSaleProducts(res.data);
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
        <div className="mapped-sale-products">
          {saleProducts.map(saleProduct => {
            return <Product key={saleProduct.id} saleProduct={saleProduct} saleProducts={saleProducts}/>
          })}
        </div>
      </section>

       <section className="featured">
        <h4>Featured products</h4>
      </section>
    </div>
   );
}
 
export default HomePage;