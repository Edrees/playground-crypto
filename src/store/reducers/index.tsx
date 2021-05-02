import { combineReducers } from 'redux';
import toggleActionReducer from './toggleActionReducer';

export default combineReducers({
  toggleAction: toggleActionReducer,
});
