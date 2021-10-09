import { useState } from 'react';

import { Hotel } from '../../types/hotel';
import { HotelComponentProps } from '../../types/hotel-component-props';
import Menu from '../menu/menu';
import Sort from '../sort/sort';
import Hotels from './hotel/hotels';

type MainWithDataProps = HotelComponentProps & {
  placesCount: number;
};

function MainWithData({ hotels, placesCount }: MainWithDataProps): JSX.Element {
  const [activeHotel, setActiveHotel] = useState<Hotel | null>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Menu />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            <Sort />
            <Hotels hotels={hotels} setActiveHotel={setActiveHotel} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainWithData;
