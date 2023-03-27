import { combineReducers } from 'redux';
import userAnswerArrayReducer from './userAnswerArray';
const allReducers = combineReducers({
  userAnswerArrayReducer,
});

export default allReducers;
