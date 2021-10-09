import { Dictionary } from '@reduxjs/toolkit';

import { Hotel } from '../../../types/hotel';
import FavoriteGroupedHotels from './favorite-grouped-hotels';

type FavoriteHotelsProps = {
  groupedHotels: Dictionary<[Hotel, ...Hotel[]]>;
};

function FavoriteHotels({ groupedHotels }: FavoriteHotelsProps): JSX.Element {
  const hotelNames = Object.keys(groupedHotels);

  const groupHotelsRender = (name: string) => {
    const hotels = groupedHotels[name];
    const key = `grouped-hotel-${name}`;
    if (hotels?.length) {
      return <FavoriteGroupedHotels key={key} hotelName={name} hotels={hotels} />;
    } else {
      return null;
    }
  };

  return <ul className="favorites__list">{hotelNames.map(groupHotelsRender)}</ul>;
}

export default FavoriteHotels;
