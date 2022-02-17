import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaExclamationCircle, FaStar } from "react-icons/fa";
import { StyledProduct } from "../../components/SingleProduct/Product.style";
import { baseURL } from "../../variables";
import { StyledViewButton } from "../../components/styled/ViewButton.style";

const HomePage = ({ className }) => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);

  // load products on sale
  useEffect(() => {
    axios
      .get(baseURL + "/")
      .then((res) => {
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
          <FaExclamationCircle className="icon" />
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
          <FaStar className="icon" />
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
                <StyledViewButton productName={featuredProduct.name} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
