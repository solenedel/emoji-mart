import React from "react";
import { Link } from "react-router-dom";

const ViewButton = ({ productName }) => {
  return (
    <button type="button" id="view" className="view-btn">
      <Link to={`/products/view/${productName}`}>View</Link>
    </button>
  );
};

export default ViewButton;
