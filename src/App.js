import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Try from "./Components/Entry";
import DataVisualization from "./Components/DataVisualization";

import ScatterPlot from "./ScatterPlot";

function App() {
  return (
    /* TODO: Official */
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/demo">
          <Try />
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
