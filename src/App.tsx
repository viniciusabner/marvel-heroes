import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import Hero from "./pages/Hero";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/heroes">
          <Heroes />
        </Route>
        <Route path="/hero">
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
