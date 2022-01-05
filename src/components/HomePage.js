import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledProduct } from "./styled/Product.style";

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
      <section className="sale">
        <h4>
          <i className="fas fa-exclamation-circle" />
          &nbsp;On sale
        </h4>
        <div className="mapped-products">
          {saleProducts.map((saleProduct) => {
            return (
              <StyledProduct
                key={saleProduct.id}
                saleProduct={saleProduct}
                saleProducts={saleProducts}
              />
            );
          })}
        </div>
      </section>

      <section className="featured">
        <h4>
          <i className="fas fa-star" />
          &nbsp;Featured
        </h4>
        <div className="mapped-products">
          {featuredProduct.map((featuredProduct) => {
            return (
              <div className="featured-product" key={featuredProduct.id}>
                <div className="featured-img">{featuredProduct.image_path}</div>
                <div className="price-name">
                  <h3>{featuredProduct.name}</h3>
                  <div>${featuredProduct.price}</div>
                  <div>{featuredProduct.description}</div>
                </div>
                <button type="button" id="view" className="view-btn">
                  view
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
