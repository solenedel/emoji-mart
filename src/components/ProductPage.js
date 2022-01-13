import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const ProductPage = ({ className }) => {
  const { viewedProductContext } = useAppContext();
  const [viewedProduct] = viewedProductContext;
  const [currentProductDetails, setCurrentProductDetails] = useState({});

  // axios request to get data on the specific product
  useEffect(() => {
    if (viewedProduct !== "") {
      axios
        .get(baseURL + `/products/view/${viewedProduct}`)
        .then((res) => {
          console.log("AXIOS GET - SINGLE PRODUCT: ", res.data);
          setCurrentProductDetails(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <section className={className}>
      <div id="product-image">{currentProductDetails.image_path}</div>
      <div className="product-details">
        <h1 id="product-name">{currentProductDetails.name}</h1>
        <div>Price: ${currentProductDetails.price}</div>
        <div>{currentProductDetails.description}</div>
        {currentProductDetails.on_sale ? (
          <div id="sale-status">This product is currently on sale!</div>
        ) : (
          <div id="sale-status">This product is not on sale right now.</div>
        )}
      </div>
      <div className="buttons">
        <button type="button">
          <i className="fas fa-shopping-cart" />
          Add to cart
        </button>
        <button type="button">
          <i className="fas fa-heart" />
          Add to favorites
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
