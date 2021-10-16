import { useEffect, useState } from 'react';
import { Dictionary } from 'lodash';

import Menu from '../menu/menu';
import MainEmpty from './main-empty';
import MainWithData from './main-with-data';
import { Hotel } from '../../types/hotel/hotel';
import { HotelComponentProps } from '../../types/hotel/hotel-component-props';
import { MenuItem, MenuItems } from '../../types/menu-item';
import { getGroupedHotels } from '../../service/hotels';

const menuItems: MenuItems = [
  { id: '27874310-e307-44a1-acb7-70d2d5a8a562', name: 'Paris' },
  { id: 'd5a9c49b-e577-45cd-843e-f6b7a199bbb8', name: 'Cologne' },
  { id: 'd50c1173-942b-45e3-97d6-38c120bd732d', name: 'Brussels' },
  { id: 'a3025ec6-6bbb-4e86-bd6f-a0389e142a8c', name: 'Amsterdam' },
  { id: '9d9c2a0f-4f6a-4e12-a22a-ff7d9257ec58', name: 'Hamburg' },
  { id: 'e875881f-eca3-4b1a-9668-24f2c3678427', name: 'Dusseldorf' },
];

function Main({ hotels }: HotelComponentProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<MenuItem>();
  const [groupedHotels, setGroupedHotels] = useState<Dictionary<[Hotel, ...Hotel[]]>>();
  const [cityHotels, setCityHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    let cityHotelsLocal: Hotel[];
    if (!selectedCity || !groupedHotels) {
      cityHotelsLocal = [];
    } else {
      cityHotelsLocal = groupedHotels[selectedCity.name];
    }

    setCityHotels(cityHotelsLocal);
  }, [selectedCity, groupedHotels, setCityHotels]);

  useEffect(() => {
    const groupedHotelsLocal = getGroupedHotels(hotels);

    setGroupedHotels(groupedHotelsLocal);
    setSelectedCity(menuItems[0]);
  }, [hotels, setGroupedHotels, setSelectedCity]);

  const placesCount = cityHotels?.length;
  const isAnyHotels = placesCount > 0;
  const menuStyle = isAnyHotels ? '' : 'page__main--index-empty';
  return (
    <main className={`page__main page__main--index ${menuStyle}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <Menu
          menuItems={menuItems}
          selectedMenuItem={selectedCity}
          setSelectedMenuItem={setSelectedCity}
        />
      </div>
      {isAnyHotels ? <MainWithData hotels={cityHotels} placesCount={placesCount} /> : <MainEmpty />}
    </main>
  );
}

export default Main;
