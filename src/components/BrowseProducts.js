import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Searchbar from "./Searchbar";
import { StyledProduct } from "./styled/Product.style";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const Products = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [queryReturned, setQueryReturned] = useState(false);

  const handleSearchInputChange = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchQuery(e.target.value.toLowerCase());
    setQueryReturned(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQueryReturned(false);
    setIsLoading(true);

    if (searchQuery !== "") {
      axios
        .get(baseURL + `/products/search/${searchQuery}`)
        .then((res) => {
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
    // ⚠️ make this more modular later by creating a custom category button component
    // the below if statement is a temporary workaround but should be removed later
    if (selectedCategory !== "") {
      axios
        .get(baseURL + `/products/category/${selectedCategory}`)
        .then((res) => {
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
      <form action="submit" id="price-filter-form">
        <h4>Filter by price</h4>
        <label htmlFor="max-price">
          {" "}
          Maximum price $
          <input type="number" id="max-price" name="max-price" min={0} />
        </label>

        <label htmlFor="min-price">
          {" "}
          Minimum price $
          <input type="number" id="min-price" name="min-price" min={0} />
        </label>
      </form>
      {isLoading && (
        <ThreeDots
          height="200"
          width="100"
          color="#AB94FA"
          arialLabel="loading"
        />
      )}
      {searchResults.length === 0 && queryReturned === true && (
        <div id="no-results-found">Sorry, no results found.</div>
      )}
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
        {!isLoading &&
          searchResults.length > 0 &&
          searchResults.map((searchResult) => {
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
