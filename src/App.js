import Home from "./Home";
import About from "./About";
import Game from "./Game";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
