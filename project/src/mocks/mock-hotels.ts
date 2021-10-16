import { Hotel } from '../types/hotel/hotel';
import { ApartmentType } from '../enums/apartment-type';
import { Goods } from '../enums/good';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Amsterdam hotel',
    title: 'Amsterdam best hotel',
    type: ApartmentType.Hotel,
    description: 'Amsterdam hotel',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 1 },
    },
    bedrooms: 3,
    goods: [Goods.CableTV, Goods.CoffeeMachine, Goods.Dishwasher, Goods.Heating],
    host: { id: 'host_1', name: 'host 1', avatarUrl: 'img/avatar-angelina.jpg', isPro: true },
    previewImage: 'img/apartment-small-03.jpg',
    images: [
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
    isFavorite: false,
    isPremium: false,
    location: { latitude: 1.2, longitude: 1.1, zoom: 2 },
    maxAdults: 2,
    price: 120,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Amsterdam hotel',
    title: 'Amsterdam best hotel 2',
    type: ApartmentType.Apartment,
    description: 'Amsterdam hotel',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 1 },
    },
    bedrooms: 2,
    goods: [Goods.CableTV],
    host: { id: 'host_1', name: 'host 1', avatarUrl: '', isPro: true },
    previewImage: 'img/apartment-small-04.jpg',
    images: ['img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: false,
    location: { latitude: 52.369553943508, longitude: 4.85309666406198, zoom: 2 },
    maxAdults: 4,
    price: 120,
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Amsterdam hotel',
    title: 'Amsterdam best hotel',
    type: ApartmentType.Apartment,
    description: 'Amsterdam hotel',
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 1 },
    },
    bedrooms: 2,
    goods: [Goods.CableTV],
    host: { id: 'host_1', name: 'host 1', avatarUrl: '', isPro: true },
    previewImage: 'img/apartment-small-03.jpg',
    images: ['img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 2 },
    maxAdults: 4,
    price: 120,
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Paris hotel',
    title: 'Paris best hotel',
    type: ApartmentType.Apartment,
    description: 'Amsterdam hotel',
    city: { name: 'Paris', location: { latitude: 1, longitude: 1.1, zoom: 1 } },
    bedrooms: 2,
    goods: [Goods.CableTV],
    host: { id: 'host_1', name: 'host 1', avatarUrl: '', isPro: true },
    previewImage: 'img/apartment-small-04.jpg',
    images: ['img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: { latitude: 1.2, longitude: 1.1, zoom: 2 },
    maxAdults: 4,
    price: 120,
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Paris hotel 2',
    title: 'Paris best hotel 2',
    type: ApartmentType.Apartment,
    description: 'Amsterdam hotel',
    city: { name: 'Paris', location: { latitude: 1, longitude: 1.1, zoom: 1 } },
    bedrooms: 2,
    goods: [Goods.CableTV],
    host: { id: 'host_1', name: 'host 1', avatarUrl: '', isPro: true },
    previewImage: 'img/apartment-small-03.jpg',
    images: ['img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: { latitude: 1.2, longitude: 1.1, zoom: 2 },
    maxAdults: 4,
    price: 120,
    rating: 4.5,
  },
];
