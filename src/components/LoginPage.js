import React from "react";
import { useAppContext } from "../context/context";

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  return (
    <section className={className}>
      <h2>Login</h2>
      <div id="current-user-status">
        You are currently logged in as: {user.username}
      </div>
      <form action="submit" id="login-form">
        <span className="email">
          <i className="far fa-envelope" />
          <input type="text" placeholder="enter email" />
        </span>
        <span className="password">
          <i className="fas fa-key" />
          <input type="text" placeholder="enter password" />
        </span>
        <button type="button" id="login-btn">
          Log in
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
