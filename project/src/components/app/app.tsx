import Header from '../header/header';
import Main from '../main/main';

function App(): JSX.Element {
  return <>
  <Header isMainPage={true} isAuthorized={true}/>
    <Main/>
  </>;
}

export default App;
