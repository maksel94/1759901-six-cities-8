import { useState } from 'react';

import { Hotel } from '../../types/hotel/hotel';
import { HotelComponentProps } from '../../types/hotel/hotel-component-props';
import CityMap from '../map/city-map';
import Sort from '../sort/sort';
import Hotels from './hotel/hotels';

type MainWithDataProps = HotelComponentProps & {
  placesCount: number;
};

//TODO: remove p tag with visually-hidden
function MainWithData({ hotels, placesCount }: MainWithDataProps): JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>();
  const city = hotels[0]?.city;

  return (
    <>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <Sort />
            <Hotels hotels={hotels} setSelectedHotel={setSelectedHotel} />
          </section>
          <div className="cities__right-section">
            <CityMap cityLocation={city.location} points={hotels} selectedPoint={selectedHotel} />
          </div>
        </div>
      </div>
      <p className="visually-hidden">{selectedHotel?.title}</p>
    </>
  );
}

export default MainWithData;
