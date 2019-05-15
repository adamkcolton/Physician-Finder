import React, { Component } from 'react';
import Map from "./components/Map";

import './App.css';

class App extends Component {
  state = {
    markerCoords: [
      {
        lat: 39.8283,
        lng: -98.5795
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>HELLo</h1>
        <div className="mapDisplay text-center">
          <Map
            markerCoords={this.state.markerCoords}
          />
        </div>
      </div>
    );
  }
}

export default App;
