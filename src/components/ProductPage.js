import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const ProductPage = ({ className }) => {
  const { viewedProductContext } = useAppContext();
  const { userContext } = useAppContext();

  const [viewedProduct] = viewedProductContext;
  const [user, setUser] = userContext;

  const [currentProductDetails, setCurrentProductDetails] = useState({});

  // axios request to get data on the specific product
  useEffect(() => {
    if (viewedProduct !== "") {
      axios
        .get(baseURL + `/products/view/${viewedProduct}`)
        .then((res) => {
          // console.log("AXIOS GET - SINGLE PRODUCT: ", res.data);
          setCurrentProductDetails(res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // add product to cart (only if user is authenticated)
  const addToCartHandler = () => {
    if (user.isAuthenticated === true) {
      console.log("user is authenticated: ", user.isAuthenticated);
    } else {
      console.log("user is not authenticated. please log in.");
    }
  };

  // add product to favourites (only if user is authenticated)
  const addToFavsHandler = () => {
    if (user.isAuthenticated === true) {
      console.log("user is authenticated: ", user.isAuthenticated);
    } else {
      console.log("user is not authenticated. please log in.");
    }
  };

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
        <button type="button" id="add-to-fav-btn" onClick={addToCartHandler}>
          <i className="fas fa-shopping-cart" />
          Add to cart
        </button>
        <button type="button" id="add-to-cart-btn" onClick={addToFavsHandler}>
          <i className="fas fa-heart" />
          Add to favorites
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
