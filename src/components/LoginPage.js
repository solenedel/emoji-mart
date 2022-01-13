import React from "react";
import { useAppContext } from "../context/context";

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const demoLoginHandler = () => {
    setUser({
      username: "Demo User 💎",
      isAuthenticated: true,
    });
    console.log("🔐 DEMO USER LOGGED IN.");
  };

  return (
    <section className={className}>
      <h2>Login</h2>
      <button type="button" id="demo-login-btn" onClick={demoLoginHandler}>
        Log in as demo user
      </button>
      <div>currently logged in as: {user.username}</div>
    </section>
  );
};

export default LoginPage;
