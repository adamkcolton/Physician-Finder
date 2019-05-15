import React, { Component } from 'react';
import Map from "./components/Map";

import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <h1>HELLo</h1>
        <div className="mapDisplay text-center">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
