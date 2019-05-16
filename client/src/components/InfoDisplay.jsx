import React, { Component } from 'react';

class InfoDisplay extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <h6>Role:
                            <span className="dataText">Medical Doctor</span>
                        </h6>
                        <h6>
                            Specialty:
                            <span className="dataText">Allopathic & Osteopathic Physicians</span>
                        </h6>
                        <h6>
                            Program Year:
                            <span className="dataText">2016</span>
                        </h6>
                        <h6>
                            GPO Name:
                            <span className="dataText">The Orthopaedic Implant Company</span>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoDisplay;