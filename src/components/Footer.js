import React from "react";
import { FaTerminal } from "react-icons/fa";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        {" "}
        <FaTerminal className="icon" />
        This app was made by{" "}
        <a href="https://github.com/solenedel" target="_blank" rel="noreferrer">
          solenedel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
