import { Goods } from '../../enums/good';

type RoomInsideProps = {
  goods: Goods[];
};

function RoomInside({ goods }: RoomInsideProps): JSX.Element {
  const goodRender = (good: Goods) => {
    const key = `good_${good}`;
    return (
      <li key={key} className="property__inside-item">
        {Goods[good]}
      </li>
    );
  };

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">{goods.map(goodRender)}</ul>
    </div>
  );
}

export default RoomInside;
