import React, { useState } from "react";
import { useAppContext } from "../context/context";

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail(email);
    setPassword(password);

    console.log(`user ${user} logged in`);
    console.log(`email: ${email} password: ${password}`);
  };

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
