import React from "react";

const Searchbar = ({ handleSearchSubmit, handleSearchInputChange }) => {
  return (
    <section className="search-bar">
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
      </form>
    </section>
  );
};

export default Searchbar;
