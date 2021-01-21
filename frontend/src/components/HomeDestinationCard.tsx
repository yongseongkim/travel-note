import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Destination } from '../types/common';

const Container = styled.a`
  border-radius: 6px;
  box-shadow: 0 8px 12px 0 rgba(33,37,41,.15);
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 210px;
  background-color: #f1f3f5;
`;

const Body = styled.div`
 padding: 0 20px 0 20px;
`;

export default function HomeDestinationCard(destination: Destination) {
  return (
    <Container>
      <Link to={"destinations/" + destination.id}>
        <Thumbnail>
        </Thumbnail>
        <Body>
          <h3>{destination.name}</h3>
          <p>{destination.description}</p>
        </Body>
      </Link>
    </Container>
  );
}