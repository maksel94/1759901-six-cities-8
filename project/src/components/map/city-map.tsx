import { MapProps } from '../../types/map/map-props';
import Map from './map';

function CityMap({ className = '', ...restProps }: MapProps): JSX.Element {
  return <Map className={`cities__map ${className}`} {...restProps} />;
}

export default CityMap;
