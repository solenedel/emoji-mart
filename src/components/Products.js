import axios from "axios";
import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { StyledProduct } from "./styled/Product.style";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`; // change this for production build?

const Products = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("submitted search query: ", searchQuery);

    if (searchQuery !== "") {
      axios
        .get(baseURL + `/products/search/${searchQuery}`)
        .then((res) => {
          console.log(`SEARCHING FOR QUERY: ${searchQuery}: `, res.data);
          setSearchResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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

  // get products from categories
  useEffect(() => {
    // NOTE: make this more modular later by creating a custom category button component
    // the below if statement is a temporary workaround but should be removed later
    if (selectedCategory !== "") {
      axios
        .get(baseURL + `/products/category/${selectedCategory}`)
        .then((res) => {
          console.log(`AXIOS GET - CATEGORY ${selectedCategory}: `, res.data);
          setSearchResults(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedCategory]);

  return (
    <div className={className}>
      <h3>Browse products</h3>
      <Searchbar
        handleSearchInputChange={handleSearchInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <section id="browse-category">
        <h3>Browse by category</h3>
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
      <div className="product-results">
        {searchResults.map((searchResult) => {
          return (
            <StyledProduct
              key={searchResult.id}
              saleProduct={searchResult}
              searchResults={searchResults}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
