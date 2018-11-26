import React, { Component } from "react";
import "./api/config";
import { set, update, remove } from "./api";

class App extends Component {
  render() {
    return <button onClick={() => update("data", "1234")}>Click</button>;
  }
}

export default App;
