import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const CartPage = () => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const [cartProducts, setCartProducts] = useState([]);

  // get products in user's cart, if any
  useEffect(() => {
    console.log("USER", user);
    // replace line below to use session cookies
    if (user.auth === true) {
      axios
        .get(baseURL + `/cart/${user.id}`)
        .then((res) => {
          console.log("MY CART: ", res.data);
          setCartProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return user.auth ? (
    <section className="user-cart">
      <h2>{user.username}&apos;s cart</h2>
      <div className="cart-products">
        {cartProducts.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
    </section>
  ) : (
    <div>You must be logged in to view your cart.</div>
  );
};

export default CartPage;
