import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { StyledProduct } from "../../components/SingleProduct/Product.style";
import FilterForm from "./FilterForm";
import Searchbar from "./Searchbar";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const Products = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  return (
    <div className={className}>
      <h3>Browse products</h3>
      <Searchbar
        handleSearchInputChange={handleSearchInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
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
      <FilterForm
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        queryReturned={queryReturned}
        setQueryReturned={setQueryReturned}
      />
    </div>
  );
};

export default Products;
