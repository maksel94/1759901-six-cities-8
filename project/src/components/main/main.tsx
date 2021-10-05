import MainEmpty from './main-empty';
import MainWithData from './main-with-data';

function Main(): JSX.Element {
  const citiesPlaces = [1];
  if (citiesPlaces.length) {
    return <MainWithData />;
  } else {
    return <MainEmpty />;
  }
}

export default Main;
