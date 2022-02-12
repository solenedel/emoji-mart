import React, { useState } from "react";
import axios from "axios";
import {
  FaSeedling,
  FaAppleAlt,
  FaUtensils,
  FaGlassMartiniAlt,
} from "react-icons/fa";
import { baseURL } from "../../../variables";
import { useFilterForm } from "./useFilterForm";

const FilterForm = () => {
  // use custom filter form hook
  const { handleMaxInputChange, handleMinInputChange, handlePriceFormSubmit } =
    useFilterForm();

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
          <button type="button" className="plants">
            <FaSeedling className="icon" />
          </button>
          <button type="button" className="fruits">
            <FaAppleAlt className="icon" />
          </button>
          <button type="button" className="food">
            <FaUtensils className="icon" />
          </button>
          <button type="button" className="drinks">
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
