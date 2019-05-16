import React, { Component } from 'react';
import Map from './components/Map';
import SearchForm from './components/SearchForm';
import { alertMessage, searchId } from './services/search';

import './App.css';
import InfoDisplay from './components/InfoDisplay';
// import { type } from 'os';

class App extends Component {
  state = {
    physInfo: [
      {
        name: "Khoa",
        role: "Structural Designer",
        specialty: "Shoring",
        year: "2016",
        gpoName: "The Orthopaedic Implant Company",
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
    const { physInfo } = this.state

    searchId(firstName, middleInitial, lastName).then((r) => {
      console.log(r)
      physInfo.push({ lat: r[1].lat, lng: r[1].lng });
      this.setState({ physInfo });
    })
  }

  render() {
    return (
      <div className="container main">
        <h1 className="text-center">Physician Finder</h1>
        <SearchForm
          className="text-center"
          search={this.formSubmit}
        />
        <div className="mapDisplay">
          <Map
            markerCoords={this.state.physInfo}
          />
          {this.state.physInfo.map((data) =>
            <InfoDisplay
              name={data.name}
              role={data.role}
              specialty={data.specialty}
              year={data.year}
              gpoName={data.gpoName}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
