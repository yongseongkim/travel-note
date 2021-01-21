import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomeDestinationCard from './HomeDestinationCard';
import { Destination } from '../types/common';

const DestinationGrid = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto auto auto;
  margin: auto;
`;

export default function Home() {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'destinations')
      .then(response => response.json())
      .then(destinations => {
        setDestinations(destinations)
      });
  }, [])
  return (
    <div>
      <DestinationGrid>
        {destinations.map((dest) => HomeDestinationCard(dest))}
      </DestinationGrid>
    </div>
  );
}
