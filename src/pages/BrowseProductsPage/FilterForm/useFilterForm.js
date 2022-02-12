import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../variables";

// custom hook with filter form logic

export const useFilterForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });
  // const [filterFormResults, setFilterFormResults] = useState([]);

  const handleMinInputChange = (e) => {
    setPriceRange({ ...priceRange, min: Number(e.target.value) }); // USE PREV
    // console.log("MIN PRICE:  ", Number(priceRange.min));
  };

  const handleMaxInputChange = (e) => {
    setPriceRange({ ...priceRange, max: Number(e.target.value) }); // USE PREV
    // console.log("MAX PRICE:  ", Number(priceRange.max));
  };

  return { handleMaxInputChange, handleMinInputChange };
};
