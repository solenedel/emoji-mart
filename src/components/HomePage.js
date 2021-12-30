import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const HomePage = ({ className }) => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  // load products on sale
  useEffect(() => {
    axios
      .get(baseURL + "/")
      .then((res) => {
        console.log("AXIOS GET - SALE PRODUCTS: ", res.data);
        setSaleProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // load featured product
  useEffect(() => {
    axios
      .get(baseURL + "/featured")
      .then((res) => {
        console.log("AXIOS GET - FEATURED PRODUCT: ", res.data);
        setFeaturedProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={className}>
      {/* <p>Fresh emojis delivered to you!</p> */}
      <section className="sale">
        <h4>Currently on sale</h4>
        <div className="mapped-products">
          {saleProducts.map((saleProduct) => {
            return (
              <Product
                key={saleProduct.id}
                saleProduct={saleProduct}
                saleProducts={saleProducts}
              />
            );
          })}
        </div>
      </section>

      <section className="featured">
        <h4>Featured product</h4>
        <div className="mapped-products">
          {featuredProduct.map((featuredProduct) => {
            return (
              <div className="featured-product" key={featuredProduct.id}>
                <h3>{featuredProduct.name}</h3>
                <div className="featured-img">{featuredProduct.image_path}</div>
                <p>${featuredProduct.price}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
