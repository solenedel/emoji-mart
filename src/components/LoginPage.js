import React from "react";

const LoginPage = ({ className }) => {
  return (
    <section className={className}>
      <h2>Login</h2>
      <button type="button" id="demo-login-btn">
        Log in as demo user
      </button>
    </section>
  );
};

export default LoginPage;
