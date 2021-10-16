import { ApartmentType } from '../../enums/apartment-type';
import { Goods } from '../../enums/good';
import { City } from '../city';
import { Host } from '../host';
import { MapPoint } from '../map-point';

export type Hotel = MapPoint & {
  id: string;
  name: string;
  type: ApartmentType;
  description: string;
  city: City;
  bedrooms: number;
  goods: Goods[];
  host: Host;
  previewImage: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  price: number;
  rating: number;
};
