import React, { Component } from 'react';

class Marker extends Component {
    state = {}
    render() {
        return (
            <div>
                <i className="markerNum">1</i>
                <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}

export default Marker;