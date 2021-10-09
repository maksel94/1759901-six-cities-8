import { HotelComponentProps } from '../../types/hotel-component-props';
import MainEmpty from './main-empty';
import MainWithData from './main-with-data';

function Main({ hotels }: HotelComponentProps): JSX.Element {
  const placesCount = hotels.length;
  if (placesCount > 0) {
    return <MainWithData hotels={hotels} placesCount={placesCount} />;
  } else {
    return <MainEmpty />;
  }
}

export default Main;
