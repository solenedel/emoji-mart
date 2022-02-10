import React from "react";
import { FaSearch } from "react-icons/fa";

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
            <FaSearch className="icon" />
          </button>
        </label>
      </form>
    </section>
  );
};

export default Searchbar;
