import Header from '../header/header';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';

function App(): JSX.Element {
  return <>
    <Header isMainPage={true} isAuthorized={true} />
    <SignIn />
  </>;
}

export default App;
