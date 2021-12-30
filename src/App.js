import {useState} from "react";
import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styled/theme';
import { StyledNavbar } from "./components/styled/Navbar.style";
import { StyledProducts } from "./components/styled/Products.style";
import { StyledHomePage } from "./components/styled/HomePage.style";


function App() {

const [theme, setTheme] = useState('light');

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <StyledNavbar />
          <button onClick={toggleTheme} >Toggle theme</button>
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
