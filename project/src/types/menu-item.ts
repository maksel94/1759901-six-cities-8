import { City } from './city';

export type MenuItem = Omit<City, 'location'> & {
  id: string;
};

export type MenuItems = MenuItem[];
