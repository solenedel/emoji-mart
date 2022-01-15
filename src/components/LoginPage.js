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
    </section>
  );
};

export default LoginPage;
