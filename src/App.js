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
const [toggleButtonIcon, setToggleButtonIcon] = useState('theme 🌙');

// toggle between light and dark themes
const toggleTheme = () => {
  if (theme === 'light') {
    setTheme('dark');
    setToggleButtonIcon('theme ☀️');
  } else {
    setTheme('light');
    setToggleButtonIcon('theme 🌙');
  }
}

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
