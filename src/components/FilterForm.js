import React, { useState } from "react";
import axios from "axios";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

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

  // get products from categories
  // useEffect(() => {
  //   // ⚠️ make this more modular later by creating a custom category button component
  //   // the below if statement is a temporary workaround but should be removed later
  //   if (selectedCategory !== "") {
  //     axios
  //       .get(baseURL + `/products/category/${selectedCategory}`)
  //       .then((res) => {
  //         setSearchResults(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [selectedCategory]);

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
          baseURL + `/products/search/price/${priceRange.min}/${priceRange.max}`
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
    <div className="filters">
      <form
        action="submit"
        id="price-filter-form"
        onSubmit={handlePriceFormSubmit}
      >
        <h4>Filter by price</h4>
        <label htmlFor="max-price">
          {" "}
          Maximum price $
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
          Minimum price $
          <input
            type="number"
            id="min-price"
            name="min-price"
            min={0}
            onChange={handleMinInputChange}
          />
        </label>
        <button type="submit">Confirm</button>
      </form>
      <section id="browse-category">
        <h4>Select category</h4>
        <div className="category-buttons">
          <button
            type="button"
            className="plants"
            onClick={() => {
              setPlantsCategory();
            }}
          >
            <i className="fas fa-seedling" />
            &nbsp;Plants
          </button>
          <button
            type="button"
            className="fruits"
            onClick={() => {
              setFruitsCategory();
            }}
          >
            <i className="fas fa-apple-alt" />
            &nbsp;Fruits
          </button>
          <button
            type="button"
            className="food"
            onClick={() => {
              setFoodCategory();
            }}
          >
            <i className="fas fa-utensils" />
            &nbsp;Food
          </button>
          <button
            type="button"
            className="drinks"
            onClick={() => {
              setDrinksCategory();
            }}
          >
            <i className="fas fa-glass-martini-alt" />
            &nbsp;Drinks
          </button>
        </div>
      </section>
    </div>
  );
};

export default FilterForm;
