import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Destination } from '../types/common';

interface URLParamTypes {
  id: string
}

const MapContainer = styled.div`
  width: 80%;
  height: 100%;
  display: inline-block;
`

export default function DestinationDetail() {
  const { id } = useParams<URLParamTypes>();
  let [destination, setDestination] = useState<Destination | null>(null);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "destinations/" + id)
      .then(response => response.json())
      .then(destination => {
        setDestination(destination);
      });
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GCP_API_KEY as string
          }}
          defaultCenter={{ lat: 11.0168, lng: 76.9558 }}
          defaultZoom={11}
          options={{ disableDefaultUI: true }}
        >
        </GoogleMapReact>
      </MapContainer>
    </div>
  );
}
