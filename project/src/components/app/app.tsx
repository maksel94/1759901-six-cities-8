import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Main from '../main/main';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';

function App(): JSX.Element {
  return <>
    <Header isMainPage={true} isAuthorized={true} />
    <Room />
  </>;
}

export default App;
