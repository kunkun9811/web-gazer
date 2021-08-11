import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import DemoEntry from "./Components/DemoEntry";
import DataVisualization from "./Components/DataVisualization";

function App() {
  return (
    /* TODO: Official */
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/demo">
          <DemoEntry />
        </Route>
        <Route exact path="/viz">
          <DataVisualization />
        </Route>
      </Switch>
    </Router>
    /* End Official */

    // <ScatterPlot />
  );
}

export default App;
