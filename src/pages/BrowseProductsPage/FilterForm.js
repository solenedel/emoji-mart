import React, { useState } from "react";
import axios from "axios";
import {
  FaSeedling,
  FaAppleAlt,
  FaUtensils,
  FaGlassMartiniAlt,
} from "react-icons/fa";
import { baseURL } from "../../variables";

const FilterForm = ({
  searchResults,
  setSearchResults,
  queryReturned,
  setQueryReturned,
  isLoading,
  setIsLoading,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });

  const setPlantsCategory = () => {
    setSelectedCategory("plants");
  };

  const setFruitsCategory = () => {
    setSelectedCategory("fruits");
  };

  const setFoodCategory = () => {
    setSelectedCategory("food");
  };

  const setDrinksCategory = () => {
    setSelectedCategory("drinks");
  };

  const handleMinInputChange = (e) => {
    setPriceRange({ ...priceRange, min: Number(e.target.value) }); // USE PREV
    // console.log("MIN PRICE:  ", Number(priceRange.min));
  };

  const handleMaxInputChange = (e) => {
    setPriceRange({ ...priceRange, max: Number(e.target.value) }); // USE PREV
    // console.log("MAX PRICE:  ", Number(priceRange.max));
  };

  const handlePriceFormSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED PRICE RANGE: ", priceRange);

    if (priceRange.min > 0 && priceRange.max > 0) {
      axios
        .get(
          baseURL +
            `/products/search/price/${priceRange.min}/${priceRange.max}/${selectedCategory}`
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
          Maximum $
          <input
            type="number"
            id="max-price"
            name="max-price"
            min={0}
            onChange={handleMaxInputChange}
          />
        </label>

        <label htmlFor="min-price">
          {" "}
          Minimum $
          <input
            type="number"
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
          <button
            type="button"
            className="plants"
            onClick={() => {
              setPlantsCategory();
            }}
          >
            <FaSeedling className="icon" />
          </button>
          <button
            type="button"
            className="fruits"
            onClick={() => {
              setFruitsCategory();
            }}
          >
            <FaAppleAlt className="icon" />
          </button>
          <button
            type="button"
            className="food"
            onClick={() => {
              setFoodCategory();
            }}
          >
            <FaUtensils className="icon" />
          </button>
          <button
            type="button"
            className="drinks"
            onClick={() => {
              setDrinksCategory();
            }}
          >
            <FaGlassMartiniAlt className="icon" />
          </button>
        </div>
      </div>
      <button type="submit" id="confirm-filters-btn">
        Confirm
      </button>
    </form>
  );
};

export default FilterForm;
