import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/context";
import { baseURL } from "../../variables";

const CartPage = () => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const [cartProducts, setCartProducts] = useState([]);

  // get products in user's cart, if any
  useEffect(() => {
    axios
      .get(baseURL + `/cart/${user.username}`)
      .then((res) => {
        setCartProducts(res.data);
        console.log("MY CART: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user.auth ? (
    <section className="user-cart">
      <h2>{user.username}&apos;s cart</h2>
      <div className="cart-products">
        {/* {cartProducts.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })} */}
        {console.log("cart products: ", cartProducts)}
      </div>
    </section>
  ) : (
    <div>You must be logged in to view your cart.</div>
  );
};

export default CartPage;
