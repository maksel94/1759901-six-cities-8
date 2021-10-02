import Header from '../header/header';
import Room from '../room/room';

function App(): JSX.Element {
  return <>
    <Header isMainPage={true} isAuthorized={true} />
    <Room />
  </>;
}

export default App;
