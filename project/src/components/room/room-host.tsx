import { Host } from '../../types/host';

type RoomHostProps = {
  host: Host;
  propertyDescription: string;
};

function RoomHost({ host, propertyDescription }: RoomHostProps): JSX.Element {
  const avatarNameProStyle = host.isPro ? 'property__avatar-wrapper--pro' : '';

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${avatarNameProStyle} user__avatar-wrapper`}>
          <img
            className="property__avatar user__avatar"
            src={host.avatarUrl}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="property__user-name">{host.name}</span>
        {host.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="property__description">
        <p className="property__text">{propertyDescription}</p>
        <p className="property__text">
          An independent House, strategically located between Rembrand Square and National Opera,
          but where the bustle of the city comes to rest in this alley flowery and colorful.
        </p>
      </div>
    </div>
  );
}

export default RoomHost;
