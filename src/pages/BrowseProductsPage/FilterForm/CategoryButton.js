import React from "react";

// reusable button for category selection
const CategoryButton = ({ categoryName, categoryIcon }) => {
  return <button type="button">{categoryIcon}</button>;
};

export default CategoryButton;
