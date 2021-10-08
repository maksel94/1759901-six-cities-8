import { Dictionary, groupBy } from 'lodash';
import { Hotel } from '../types/hotel';

export const getFavoriteHotels = (hotels: Hotel[]): Hotel[] =>
  hotels.filter((hotel) => hotel.isFavorite);

export const getGroupedHotels = (hotels: Hotel[]): Dictionary<[Hotel, ...Hotel[]]> =>
  groupBy(hotels, (hotel) => hotel.city.name);
