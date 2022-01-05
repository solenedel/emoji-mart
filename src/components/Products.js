import React, { useState } from "react";

const Products = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("submitted search query: ", searchQuery);
  };

  return (
    <div className={className}>
      Browse products
      <form action="submit" onSubmit={handleSearchSubmit}>
        <label htmlFor="search-product">
          <input
            type="text"
            name="search-product"
            id="search-product"
            placeholder="Search for a product..."
            onChange={handleSearchInputChange}
          />
          <button type="button" onClick={handleSearchSubmit}>
            enter
          </button>
        </label>
        {/* Search query: {searchQuery} */}
      </form>
    </div>
  );
};

export default Products;
