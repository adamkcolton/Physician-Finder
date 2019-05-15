import React, { Component } from 'react';
import Map from './components/Map';
import SearchForm from './components/SearchForm';
import { alertMessage, searchId } from './services/search';

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

  async componentDidMount() {
    // alertMessage('hello')
  }

  async componentDidUpdate() {
    alertMessage('hello')
  }

  formSubmit = (event) => {
    event.preventDefault()
    searchId(event.target.elements[0].value).then((r) => {
      console.log(r)
    })
  }

  render() {
    return (
      <div className="App container">
        <h1>Physician Finder</h1>
        <SearchForm
          search={this.formSubmit}
        />
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
