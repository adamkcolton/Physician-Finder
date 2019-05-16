import React, { Component } from 'react';

class InfoDisplay extends Component {
    state = {}
    render() {
        var { name, role, specialty, year, gpoName } = this.props;

        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h6> Name
                        <span className="dataText"> {name}</span>
                        </h6>
                        <h6>Role:
                            <span className="dataText"> {role}</span>
                        </h6>
                        <h6>
                            Specialty:
                            <span className="dataText"> {specialty}</span>
                        </h6>
                        <h6>
                            Program Year:
                            <span className="dataText"> {year}</span>
                        </h6>
                        <h6>
                            GPO Name:
                            <span className="dataText"> {gpoName}</span>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoDisplay;