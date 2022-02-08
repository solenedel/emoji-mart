import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../context/context";
import { baseURL } from "../../variables";

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

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

      // clear form fields
      setEmail("");
      setPassword("");
    });
  };

  // set user on login
  useEffect(() => {
    axios.get(baseURL + "/login").then((res) => {
      setUser((prev) => ({
        ...prev,
        auth: res.data.auth,
        username: res.data.username,
      }));
    });
  }, []);

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
      </form>
    </section>
  );
};

export default LoginPage;
