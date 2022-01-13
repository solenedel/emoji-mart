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
        <div>${currentProductDetails.price}</div>
        <div>{currentProductDetails.description}</div>
      </div>
    </section>
  );
};

export default ProductPage;
