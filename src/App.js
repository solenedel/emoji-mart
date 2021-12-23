import { GlobalStyles } from "./components/styled/GlobalStyles.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
