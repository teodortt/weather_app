import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Image from 'next/image'


const MapboxExample = ({ lat, lon }) => {
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 5.8,
        bearing: 0,
        pitch: 0,
    });

    return (
        <div className="mapbox-react">
            <ReactMapGL
                {...viewport}
                width="100%"
                height="250px"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken='pk.eyJ1IjoidWhiNTciLCJhIjoiY2tjMW0xb2QyMXV6MDJ3bXgzc2NvaDYyciJ9.74xioo09S3OPwuNKE5J6RQ'
            >
                <Marker latitude={lat} longitude={lon} offsetLeft={-20} offsetTop={-10}>
                    <Image src="/location.png" alt="marker" width='50' height='70' />
                </Marker>
            </ReactMapGL>
        </div>
    );
};

export default MapboxExample;