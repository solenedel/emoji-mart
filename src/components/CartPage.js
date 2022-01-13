import axios from "axios";
import React, { useEffect } from "react";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const CartPage = () => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  // get products in user's cart, if any
  useEffect(() => {
    axios
      .get(baseURL + `/cart/${user.username}`)
      .then((res) => {
        console.log("MY CART: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user.isAuthenticated ? (
    <div>{user.username}&apos;s cart</div>
  ) : (
    <div>You must be logged in to view your cart.</div>
  );
};

export default CartPage;
