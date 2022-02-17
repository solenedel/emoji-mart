import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../variables";
import { useFilterForm } from "./useFilterForm";
import CategoryButton from "./CategoryButton";

const FilterForm = ({ setIsLoading, setSearchResults, setQueryReturned }) => {
  // use custom filter form hook
  const {
    handleMaxInputChange,
    handleMinInputChange,
    priceRange,
    allCategories,
  } = useFilterForm();

  const handlePriceFormSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED PRICE RANGE: ", priceRange);

    if (priceRange.min > 0 && priceRange.max > 0) {
      axios
        .get(
          baseURL +
            `/products/search/price/${priceRange.min}/${priceRange.max}/`
        )
        .then((res) => {
          console.log("RES.DATA PRICE FILTER", res.data);
          setSearchResults(res.data);

          // display the loader for a minimum amount of time (750 ms)
          setTimeout(() => {
            setIsLoading(false);
            setQueryReturned(true);
          }, 750);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setQueryReturned(false);
        });
    }
  };

  return (
    <form action="submit" id="filter-form" onSubmit={handlePriceFormSubmit}>
      <div id="price-filter-section">
        <h4>Filter by price</h4>
        <label htmlFor="max-price">
          {" "}
          $
          <input
            type="number"
            id="max-price"
            name="max-price"
            min={0}
            placeholder="max"
            onChange={handleMaxInputChange}
          />
        </label>

        <label htmlFor="min-price">
          {" "}
          $
          <input
            type="number"
            placeholder="min"
            id="min-price"
            name="min-price"
            min={0}
            onChange={handleMinInputChange}
          />
        </label>
      </div>

      <div id="browse-category">
        <h4>Select category</h4>
        <div className="category-buttons">
          {allCategories.length &&
            allCategories.map((category) => {
              return (
                <CategoryButton
                  key={category.id}
                  categoryName={category.name}
                />
              );
            })}
        </div>
      </div>
      <button type="submit" id="confirm-filters-btn">
        confirm
      </button>
    </form>
  );
};

export default FilterForm;
