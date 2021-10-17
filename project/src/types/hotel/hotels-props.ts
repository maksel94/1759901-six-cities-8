import { Dispatch, SetStateAction } from 'react';

import { HTMLAttributes } from 'react';
import { HotelCardType } from '../../enums/hotel-card-type';
import { Hotel } from './hotel';
import { HotelComponentProps } from './hotel-component-props';

export type HotelsProps = HTMLAttributes<HTMLElement> &
  HotelComponentProps & {
    hotelCardType: HotelCardType;
    setSelectedHotel?: Dispatch<SetStateAction<Hotel | undefined>>;
  };
