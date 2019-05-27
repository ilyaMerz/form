import React, { Component } from "react";
import Form from "./components/formComponent";
import { DATA } from "./components/report";
import "./App.scss";

class App extends Component {
  state = {
    data: DATA
  };
  render() {
    return (
      <div className="App">
        <Form data={this.state.data} />
      </div>
    );
  }
}

export default App;
