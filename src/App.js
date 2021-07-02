import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Entry from "./Components/Entry";
import DataVisualization from "./Components/DataVisualization";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Entry />
        </Route>
        <Route exact path="/viz">
          <DataVisualization />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
