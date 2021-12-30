import {useState} from "react";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styled/theme';
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledProducts } from "./components/styled/Products.style";
import { StyledHomePage } from "./components/styled/HomePage.style";


function App() {



  return (
     <ThemeProvider theme={lightTheme}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <StyledNavbar />
          <button>Toggle theme</button>
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
