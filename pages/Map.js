import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const MapboxExample = ({ lat, lon }) => {
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 7.8,
        bearing: 0,
        pitch: 0,
    });

    return (
        <div className="mapbox-react">
            <ReactMapGL
                {...viewport}
                width="1000px"
                height="500px"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken='pk.eyJ1IjoidWhiNTciLCJhIjoiY2tjMW0xb2QyMXV6MDJ3bXgzc2NvaDYyciJ9.74xioo09S3OPwuNKE5J6RQ'
            >
                <Marker latitude={lat} longitude={lon} offsetLeft={-20} offsetTop={-10}>
                    <img src="../location.png" width='50' />
                </Marker>
            </ReactMapGL>
        </div>
    );
};

export default MapboxExample;