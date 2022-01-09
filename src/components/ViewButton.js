import React from "react";
import { Link } from "react-router-dom";

const ViewButton = ({ productId }) => {
  return (
    <button type="button" id="view" className="view-btn">
      <Link to={`/products/${productId}`}>View</Link>
    </button>
  );
};

export default ViewButton;
