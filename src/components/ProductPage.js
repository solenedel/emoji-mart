import React from "react";
import { useAppContext } from "../context/context";

const ProductPage = () => {
  const { viewedProductContext } = useAppContext();
  const [viewedProduct, setViewedProduct] = viewedProductContext;

  return <div>viewing: {viewedProduct}</div>;
};

export default ProductPage;
