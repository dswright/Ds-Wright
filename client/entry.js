import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../application';

const render = (App) => hydrate(
  // hydrate seeks to align client app with the already-rendered server app.
  <App />,
  document.getElementById('root')
);

const theApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../application/', () => {
    const theApp = require('../application/').default; // eslint-ignore-line
    render(theApp);
  });
}

render(theApp);
