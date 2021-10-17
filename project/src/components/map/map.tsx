import { useRef, useEffect, CSSProperties } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import 'leaflet/dist/leaflet.css';
import { MapProps } from '../../types/map/map-props';

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

function Map({
  cityLocation,
  points,
  selectedPoint,
  className,
  ...restProps
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
  }, [cityLocation, map]);

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

  return (
    <section className={`map ${className}`} style={mapHeight} ref={mapRef} {...restProps}></section>
  );
}

export default Map;
