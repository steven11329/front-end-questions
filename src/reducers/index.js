import { combineReducers } from 'redux';
import question3Reducer from './question3Reducer';

const rootReducer = combineReducers({
  question3: question3Reducer,
});

export default rootReducer;
