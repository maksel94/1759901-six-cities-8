import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <p>404 Not Found</p>
      <div>
        <Link to={AppRoute.Main}>Go to Main page</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
