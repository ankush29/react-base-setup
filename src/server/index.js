import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
// import Button from '@material-ui/core/Button';
import createStore, { history } from '../client/store';
import initializeSession from '../client/actions/initializeSession';

import routes from '../client/routes';
import Layout from '../client/App';

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackconfig = require('../../webpack.config');

const compiler = webpack(webpackconfig);

const app = express();

// app.use(express.static('dist'));
app.use('/static', express.static(path.resolve(__dirname, '../../dist')));

const wpmw = webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackconfig.output.publicPath
});
app.use(wpmw);

const wphmw = webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
});
app.use(wphmw);

function htmlTemplate(reactDom, reduxState, helmetData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <meta charset="utf-8">
      ${helmetData.title.toString()}
      ${helmetData.meta.toString()}
      <title>test 1</title>
    </head>

    <body>
      <div id="root">${reactDom}</div>
      <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
      </script>
      <script src="app.bundle.js"></script>
    </body>
    </html>
  `;
}

app.get('/*', (req, res) => {
  const context = { };
  const store = createStore();
  store.dispatch(initializeSession());

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.serverFetch) // check if components have data requirement
    .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={store} history={history}>
        <StaticRouter context={context} location={req.url}>
          <Layout />
        </StaticRouter>
      </ReduxProvider>
    );

    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });
});


app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
