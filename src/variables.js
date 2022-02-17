// URL to prepend for axios requests
const baseURL = `http://localhost:8081`;

// ------------- CSS variables below ----------- //
const colors = {
  background: "black",
  primaryText: "white",
  navbarBkgd: "#9494FF", // dark purple
  lightPurple: "#C1C1FF",
  primaryGreen: "#9bffd7",
  primaryPink: "#ffc3f4",
  primaryYellow: "#fffbaf",
  primaryBlue: "#C3F6FF",
  hoverBlue: " #63e6ff",
};

const fonts = {
  mainFont: `'Rubik', sans-serif`,
  logoFont: `'Share Tech Mono', monospace`,
};

// ---------------------------------------------- //
module.exports = { colors, fonts, baseURL };
