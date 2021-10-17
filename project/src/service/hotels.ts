import { Dictionary, groupBy } from 'lodash';
import { Hotel } from '../types/hotel/hotel';
import * as constants from '../constants';

export const getFavoriteHotels = (hotels: Hotel[]): Hotel[] =>
  hotels.filter((hotel) => hotel.isFavorite);

export const getGroupedHotels = (hotels: Hotel[]): Dictionary<[Hotel, ...Hotel[]]> =>
  groupBy(hotels, (hotel) => hotel.city.name);

export const getRoomUrl = (id: string): string => `${constants.AppRoute.Room}${id}`;
