import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";

const ViewButton = ({ productName }) => {
  const { viewedProductContext } = useAppContext();
  const [viewedProduct, setViewedProduct] = viewedProductContext;

  const viewClickHandler = () => {
    setViewedProduct("kiwi");
  };

  return (
    <button
      type="button"
      id="view"
      className="view-btn"
      onClick={viewClickHandler}
    >
      <Link to={`/products/view/${productName}`}>View</Link>
    </button>
  );
};

export default ViewButton;
