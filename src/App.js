import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styled/theme";
import { GlobalStyles } from "./GlobalStyles.style";
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledBrowseProducts } from "./pages/BrowseProductsPage/BrowseProducts.style";
import { StyledHomePage } from "./pages/HomePage/HomePage.style";
import { AppContext } from "./context/context";
import { StyledProductPage } from "./components/SingleProduct/ProductPage.style";
import { StyledLoginPage } from "./pages/LoginPage/LoginPage.style";
import { StyledFooter } from "./components/styled/Footer.style";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const [theme, setTheme] = useState("light");
  const [toggleButtonIcon, setToggleButtonIcon] = useState("theme 🌙");

  // states used in app context
  const [viewedProduct, setViewedProduct] = useState("");
  const [user, setUser] = useState({});

  // toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggleButtonIcon("theme ☀️");
    } else {
      setTheme("light");
      setToggleButtonIcon("theme 🌙");
    }
  };

  // // set user on login
  // useEffect(() => {
  //   axios.get(baseURL + "/login").then((res) => {
  //     setUser((prev) => ({
  //       ...prev,
  //       auth: res.data.auth,
  //       username: res.data.username,
  //     }));
  //   });
  // }, []);

  // persist dark/light theme on page reload
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // save theme to local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
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
              <Route exact path="/products" component={StyledBrowseProducts} />
              <Route exact path="/cart" component={CartPage} />
              <Route path="/products/view/" component={StyledProductPage} />
            </Switch>
            <StyledFooter />
          </div>
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
