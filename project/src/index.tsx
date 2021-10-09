import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { hotels } from './mocks/mock-hotels';
import { reviews } from './mocks/mock-reviews';

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} reviews={reviews} />
  </React.StrictMode>,
  document.getElementById('root'),
);
