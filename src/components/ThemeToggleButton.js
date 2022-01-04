import React from "react";

const ThemeToggleButton = ({
  setThemeBtnStyle,
  toggleButtonIcon,
  toggleTheme,
}) => {
  return (
    <button
      type="button"
      id="theme-toggle-btn"
      style={setThemeBtnStyle()}
      onClick={toggleTheme}
    >
      {toggleButtonIcon}
    </button>
  );
};

export default ThemeToggleButton;
