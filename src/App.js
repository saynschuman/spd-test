import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./api/config";
import { set, update, remove } from "./api";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <button onClick={() => update("data", null)}>Click</button>;
      </Provider>
    );
  }
}

export default App;
