import { MapProps } from '../../types/map/map-props';
import Map from './map';

function PropertyMap({ className = '', ...restProps }: MapProps): JSX.Element {
  return <Map className={`property__map ${className}`} {...restProps} />;
}

export default PropertyMap;
