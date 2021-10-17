import { HTMLAttributes } from 'react';
import { Location } from '../location';
import { MapPoint, MapPoints } from '../map-point';

export type MapProps = HTMLAttributes<HTMLElement> & {
  cityLocation: Location;
  points: MapPoints;
  selectedPoint: MapPoint | undefined;
};
