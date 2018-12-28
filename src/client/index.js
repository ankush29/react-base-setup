import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './App';
import createStore, { history } from './store';

const store = createStore(window.REDUX_DATA);

const jsx = (
  <ReduxProvider store={store} history={history}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>

);

const app = document.getElementById('root');
ReactDOM.hydrate(jsx, app);

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./App', () => {
//     const NewApp = require('./App').default;
//     const NewJsx = (
//       <ReduxProvider store={store} history={history}>
//         <Router>
//           <NewApp />
//         </Router>
//       </ReduxProvider>
//
//     );
//     ReactDOM.hydrate(NewJsx, app);
//   });
// }
