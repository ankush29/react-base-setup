import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import dataReducer from './dataReducer';

const reducer = combineReducers({
  loggedIn: sessionReducer,
  data: dataReducer,
});

export default reducer;
