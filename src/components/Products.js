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
      <h3>Browse products</h3>
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
            search
          </button>
        </label>
        {/* Search query: {searchQuery} */}
      </form>
      <section id="browse-category">
        <h3>Browse by category</h3>
        <div className="category-buttons">
          <button type="button" className="plants">
            <i className="fas fa-seedling" />
            &nbsp;Plants
          </button>
          <button type="button" className="fruits">
            <i className="fas fa-apple-alt" />
            &nbsp;Fruits
          </button>
          <button type="button" className="food">
            <i className="fas fa-utensils" />
            &nbsp;Food
          </button>
          <button type="button" className="drinks">
            <i className="fas fa-glass-martini-alt" />
            &nbsp;Drinks
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
