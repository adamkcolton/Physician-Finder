import React, { Component } from 'react';

class Marker extends Component {
    render() {
        return (
            <div>
                <i className="fa fa-arrow-down fa-2x" style={{ "color": this.props.color }} aria-hidden="true"></i>
            </div>
        );
    }
}

export default Marker;