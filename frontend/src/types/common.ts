import Maps, { Coords } from 'google-map-react';

export type LatLng = Coords;

export type Bounds = {
    north: number;
    west: number;
    south: number;
    east: number;
}

export type Image = {
    width: number;
    height: number;
    url: string;
}

export type Destination = {
    id: string;
    name: string;
    description: string;
    bounds: Bounds;
}
