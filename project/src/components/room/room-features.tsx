import { ApartmentType } from '../../enums/apartment-type';

type RoomFeaturesProps = {
  apartmentType: ApartmentType;
  bedrooms: number;
  maxAdults: number;
};

function RoomFeatures({ apartmentType, bedrooms, maxAdults }: RoomFeaturesProps): JSX.Element {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {ApartmentType[apartmentType]}
      </li>
      <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
      <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
    </ul>
  );
}

export default RoomFeatures;
