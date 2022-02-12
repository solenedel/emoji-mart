import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../variables";

// custom hook with filter form logic

export const useFilterForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });

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
          // setSearchResults(res.data);

          // display the loader for a minimum amount of time (750 ms)
          setTimeout(() => {
            // setIsLoading(false);
            // setQueryReturned(true);
          }, 750);
        })
        .catch((err) => {
          console.log(err);
          // setIsLoading(false);
          // setQueryReturned(false);
        });
    }
  };
  return { handleMaxInputChange, handleMinInputChange, handlePriceFormSubmit };
};
