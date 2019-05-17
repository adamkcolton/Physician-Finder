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
        role: "Full Stack Developer",
        specialty: "Backend",
        year: "2019",
        gpoName: "University of California, Berkeley",
        lat: 37.668940,
        lng: -122.085210
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
    var middleInitial = event.target.elements[1].value || " ";
    var lastName = event.target.elements[2].value;
    var { physInfo } = this.state

    searchId(firstName, middleInitial, lastName).then((r) => {
      if (r) {
        var {
          Physician_First_Name: firstName,
          Physician_Middle_Name: middle,
          Physician_Last_Name: lastName,
          Physician_Primary_Type: role,
          Physician_Specialty: specialty,
          Program_Year: year,
          Submitting_Applicable_Manufacturer_or_Applicable_GPO_Name: gpo } = r[0];
        physInfo = [{
          name: `${firstName.slice(1, -1)} ${middle.slice(1, -1)}  ${lastName.slice(1, -1)}`,
          role: role.slice(1, -1),
          specialty: specialty.slice(1, -1),
          year: year.slice(1, -1),
          gpoName: gpo.slice(1, -1),
          lat: r[1].lat,
          lng: r[1].lng
        }, ...physInfo]
        this.setState({ physInfo });
      } else {
        alert('Please Enter Valid Name')
      }
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
