import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import createStore, { history } from '../client/store';
import initializeSession from '../client/actions/initializeSession';
import routes from '../client/routes';
import Layout from '../client/App';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../../build')));

function htmlTemplate(reactDom, reduxState, helmetData) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
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
      <script src="http://localhost:3001/client.js"></script>
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

export default app;
