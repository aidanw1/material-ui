import React from "react";
import "../App.css";
import Breakpoints from "./Breakpoints";
import Justify from "./Justify";
import HOC from "./HOC";
import FixedGrid from "./FixedGrid";
import ColumnDirection from "./ColumnDirection";

function App() {
  return (
    <div className="App">
      <h1>Breakpoints</h1>
      <Breakpoints />
      <h1>Justify</h1>
      <Justify />
      <h1>Higher Order Components - Re-using code</h1>
      <HOC />
      <h1>Fixed Grid - Responding Automatically </h1>
      <FixedGrid />
      <h1>Column Direction and Hide Column at break point</h1>
      <ColumnDirection />
    </div>
  );
}

export default App;
