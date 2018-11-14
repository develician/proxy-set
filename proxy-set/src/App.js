import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    this.testing();
  }

  testing = async () => {
    try {
      const response = await axios.get("/api/hello");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
