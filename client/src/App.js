import React, { Component } from 'react';
import Map from './components/Map';
import SearchForm from './components/SearchForm';
import { alertMessage, searchId } from './services/search';

import './App.css';
import InfoDisplay from './components/InfoDisplay';
// import { type } from 'os';

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
    var firstName = event.target.elements[0].value;
    var middleInitial = event.target.elements[1].value;
    var lastName = event.target.elements[2].value;
    const { markerCoords } = this.state

    searchId(firstName, middleInitial, lastName).then((r) => {
      console.log(r)
      markerCoords.push({ lat: r[1].lat, lng: r[1].lng });
      this.setState({ markerCoords });
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
          <InfoDisplay />
        </div>
      </div>
    );
  }
}

export default App;
