import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledProducts } from "./components/styled/Products.style";
import { StyledHomePage } from "./components/styled/HomePage.style";
import { ThemeProvider } from "styled-components";

// light / dark mode themes 

const lightTheme = {
  pageBackground: "white",
  textColor: "black", 
  headingColor: "black"
}

const darkTheme = {
  pageBackground: "black",
  textColor: "white", 
  headingColor: "white"
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
}

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <StyledNavbar />
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
  );
}

export default App;
