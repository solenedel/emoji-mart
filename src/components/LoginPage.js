import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/context";

// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const [cartProducts, setCartProducts] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login form submission handler
  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("/login", { email, password }).then((res) => {
      console.log("RES.DATA", res.data);
      setUser((prev) => ({
        ...prev,
        auth: res.data.auth,
        username: res.data.username,
      }));

      // console.log("AXIOS LOGIN REQUEST user: ", user);

      // clear form fields
      setEmail("");
      setPassword("");
    });
  };

  // get products in user's cart, if any
  // const testHandler = () => {
  //   axios
  //     .get(baseURL + `/cart/${user.username}`)
  //     .then((res) => {
  //       console.log("MY CART: ", res.data);
  //       setCartProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <section className={className}>
      <h2>Login</h2>
      <div id="current-user-status">
        You are currently logged in as: {user.username}
      </div>
      <form action="submit" id="login-form" onSubmit={handleLogin}>
        <span className="email">
          <i className="far fa-envelope" />
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <span className="password">
          <i className="fas fa-key" />
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <button type="submit" id="login-btn" onClick={handleLogin}>
          Log in
        </button>
        {/* <button type="button" onClick={testHandler}>
          TEST
        </button> */}
      </form>
    </section>
  );
};

export default LoginPage;
