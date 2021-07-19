import Home from "./components/Home";
import About from "./components/About";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
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
