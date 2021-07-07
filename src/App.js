import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Try from "./Components/Entry";
import DataVisualization from "./Components/DataVisualization";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/try">
          <Try />
        </Route>
        <Route exact path="/viz">
          <DataVisualization />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
