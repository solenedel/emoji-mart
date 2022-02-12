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
      <div className="credits">
        Credits:
        <a href="https://emojipedia.org/" target="_blank" rel="noreferrer">
          {" "}
          emojis
        </a>
        <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
          {" "}
          icons
        </a>
      </div>
    </footer>
  );
};

export default Footer;