import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from '../application';
import store from '../application/store/store';

export default ({ clientStats }) => (req, res) => {
  // need to hydrate the store with server data still.
  // Do this after implementing some basic apis.
  const app = ReactDOM.renderToString(
    <Provider store={store()}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const chunkNames = flushChunkNames();

  const {
    js, styles, scripts, stylesheets
  } = flushChunks(clientStats, {
    chunkNames
  });

  console.log('PATH', req.path); // eslint-ignore-line
  console.log('DYNAMIC CHUNK NAMES RENDERED', chunkNames); // eslint-ignore-line
  console.log('SCRIPTS SERVED', scripts); // eslint-ignore-line
  console.log('STYLESHEETS SERVED', stylesheets); // eslint-ignore-line

  res.send(
    `<!doctype html>
      <html lang="en" class="root-body">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
          <meta charset="utf-8">
          <title>Dylan Wright's Portfolio Website - ds-wright.com</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico?v=1.0" type="image/x-icon" />
          <link rel="shortcut icon" href="/favicon.ico?v=1.0" />
          ${styles}
          <!-- Hotjar Tracking Code for ds-wright.com -->
          <script>
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1622903,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-28211684-2"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-28211684-2');
          </script>
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
        ${js}
      </html>`
  );
};
