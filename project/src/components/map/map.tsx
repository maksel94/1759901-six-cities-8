import { useRef, useEffect, CSSProperties } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { MapPoint, MapPoints } from '../../types/map-point';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: MapPoints;
  selectedPoint: MapPoint | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mapHeight: CSSProperties = { height: '500px' };

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map map" style={mapHeight} ref={mapRef}></section>;
}

export default Map;
