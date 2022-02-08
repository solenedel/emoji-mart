import React from "react";

const Searchbar = ({
  handleSearchSubmit,
  handleSearchInputChange,
  className,
}) => {
  return (
    <section className={className} id="search-bar">
      <form action="submit" onSubmit={handleSearchSubmit}>
        <label htmlFor="search-product">
          <input
            type="text"
            name="search-product"
            id="search-product"
            placeholder="Search for a product..."
            onChange={handleSearchInputChange}
          />
          <button type="button" onClick={handleSearchSubmit} id="search-btn">
            🔍
          </button>
        </label>
      </form>
    </section>
  );
};

export default Searchbar;
