import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                    bootstrapURLKeys={{ key: "AIzaSyCON2KZ-OwFsRHcTyDN8yBPID475XbM27I" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <AnyReactComponent
                        lat={98.5795}
                        lng={39.8283}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;