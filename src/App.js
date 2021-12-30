import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styled/theme";
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledProducts } from "./components/styled/Products.style";
import { StyledHomePage } from "./components/styled/HomePage.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";

const LOCAL_STORAGE_KEY_THEME = "emojimart-theme";

function App() {
  const [theme, setTheme] = useState("light");
  const [toggleButtonIcon, setToggleButtonIcon] = useState("switch theme 🌙");

  // toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleButtonIcon("switch theme ☀️");
    } else {
      setTheme("light");
      setToggleButtonIcon("switch theme 🌙");
    }
  };

  // persist dark/light theme on page reload
  useEffect(() => {
    const storageTheme = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_THEME)
    );

    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);

  // save theme to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <StyledNavbar
            theme={theme}
            setTheme={setTheme}
            toggleTheme={toggleTheme}
            toggleButtonIcon={toggleButtonIcon}
            setToggleButtonIcon={setToggleButtonIcon}
          />
          <Switch>
            <Route exact path="/">
              <StyledHomePage />
            </Route>
            <Route exact path="/products">
              <StyledProducts />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
