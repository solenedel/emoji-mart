import React from "react";
import { useAppContext } from "../context/context";

const CartPage = () => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  return user.isAuthenticated ? (
    <div>My cart page: {user.username}</div>
  ) : (
    <div>please log in.</div>
  );
};

export default CartPage;
