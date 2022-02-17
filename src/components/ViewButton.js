import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";

const ViewButton = ({ productName, className }) => {
  const { viewedProductContext } = useAppContext();
  const [viewedProduct, setViewedProduct] = viewedProductContext;

  const viewClickHandler = () => {
    setViewedProduct(productName);
  };

  return (
    <button type="button" className={className} onClick={viewClickHandler}>
      <Link to={`/products/view/${productName}`}>view</Link>
    </button>
  );
};

export default ViewButton;
