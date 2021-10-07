import MainEmpty from './main-empty';
import MainWithData from './main-with-data';

function Main(): JSX.Element {
  const citiesPlaces = [1];
  const placesCount = 312;
  if (citiesPlaces.length) {
    return <MainWithData placesCount={placesCount} />;
  } else {
    return <MainEmpty />;
  }
}

export default Main;
