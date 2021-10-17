import { HotelsProps } from './hotels-props';

export type HotelsWrapperProps = Omit<HotelsProps, 'hotelCardType'>;
