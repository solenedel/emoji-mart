import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <i className="fa-solid fa-compass" />
          </button>
        </label>
      </form>
    </section>
  );
};

export default Searchbar;
