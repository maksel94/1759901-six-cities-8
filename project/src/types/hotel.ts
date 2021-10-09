import { ApartmentType } from '../enums/apartment-type';
import { Goods } from '../enums/good';
import { City } from './city';
import { Host } from './host';
import { Location } from './location';

export type Hotel = {
  id: string;
  name: string;
  title: string;
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
  location: Location;
  maxAdults: number;
  price: number;
  rating: number;
};
