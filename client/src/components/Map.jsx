import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 39.8283,
            lng: -98.5795
        },
        zoom: 4
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '100' }} className="m-4">
                <GoogleMapReact
                    bootstrapURLKeys={{ key:  }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker
                        lat={39.8283}
                        lng={-98.5795}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;