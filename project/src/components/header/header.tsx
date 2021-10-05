import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type HeaderProps = { isAuthorized: boolean };

function Header({ isAuthorized }: HeaderProps): JSX.Element | null {
  const isSignInPage: boolean = window.location.pathname === AppRoute.SignIn;
  if (isSignInPage) {
    return null;
  }

  const isMainPage: boolean = window.location.pathname === AppRoute.Main;
  const logoStyle = isMainPage ? 'header__logo-link--active' : '';
  const logoLink = !isMainPage ? AppRoute.Main : '#';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={logoLink} className={`header__logo-link ${logoStyle}`}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {isAuthorized && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Favorites}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to="#" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
