import {
  createStore, applyMiddleware, compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import addHistory from './actions/historyActions';
import reducer from './reducers';

const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const middlewares = [promise(), thunkMiddleware, routeMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default initialState => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middlewares)
  )
);


history.listen(store => location => store.dispatch(addHistory(location)));

export { history };
