import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const ProductPage = () => {
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
    <div>
      <div>viewing: {currentProductDetails.name}</div>
      <div>viewing: {currentProductDetails.id}</div>
    </div>
  );
};

export default ProductPage;
