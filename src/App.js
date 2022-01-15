import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styled/theme";
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledProducts } from "./components/styled/Products.style";
import { StyledHomePage } from "./components/styled/HomePage.style";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import { AppContext } from "./context/context";
import { StyledProductPage } from "./components/styled/ProductPage.style";
import { StyledLoginPage } from "./components/styled/LoginPage.style";
import CartPage from "./components/CartPage";

const LOCAL_STORAGE_KEY_THEME = "emojimart-theme";
const LOCAL_STORAGE_KEY_USER = "emojimart-user";

function App() {
  const [theme, setTheme] = useState("light");
  const [toggleButtonIcon, setToggleButtonIcon] = useState("switch theme 🌙");

  // states used in app context
  const [viewedProduct, setViewedProduct] = useState("");
  const [user, setUser] = useState({});

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
    <AppContext.Provider
      // eslint-disable-next-line
      value={{
        viewedProductContext: [viewedProduct, setViewedProduct],
        userContext: [user, setUser],
      }}
    >
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
              <Route exact path="/" component={StyledHomePage} />
              <Route exact path="/login" component={StyledLoginPage} />
              <Route exact path="/products" component={StyledProducts} />
              <Route exact path="/cart" component={CartPage} />
              <Route path="/products/view/" component={StyledProductPage} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
