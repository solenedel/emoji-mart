import React from "react";

// reusable button for category selection
const CategoryButton = ({ categoryName, categoryIcon }) => {
  return <button type="button">{categoryName}</button>;
};

export default CategoryButton;
