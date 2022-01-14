import React from "react";
import { useAppContext } from "../context/context";

const LoginPage = ({ className }) => {
  const { userContext } = useAppContext();
  const [user, setUser] = userContext;

  const demoLoginHandler = () => {
    setUser({
      username: "Demo User 💎",
      isAuthenticated: true,
      id: 3,
    });
    console.log("🔐 DEMO USER LOGGED IN.");
  };

  const demoLogoutHandler = () => {
    setUser({
      username: "",
      isAuthenticated: false,
    });
    console.log("🔐 DEMO USER LOGGED OUT.");
  };

  return (
    <section className={className}>
      <h2>Login</h2>
      <button type="button" id="demo-login-btn" onClick={demoLoginHandler}>
        Log in as demo user
      </button>
      <div id="current-user-status">
        You are currently logged in as: {user.username}
      </div>
      <button type="button" id="demo-logout-btn" onClick={demoLogoutHandler}>
        Demo user log out
      </button>
    </section>
  );
};

export default LoginPage;
