import React from "react";

const Products = ({ className }) => {
  return (
    <div className={className}>
      Browse products
      <form action="submit">
        <label htmlFor="search-product">
          <input
            type="text"
            name="search-product"
            id="search-product"
            placeholder="Search for a product..."
          />
        </label>
      </form>
    </div>
  );
};

export default Products;
