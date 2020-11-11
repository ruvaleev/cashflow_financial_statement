import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import incomesReducer from '../slices/incomes';

export default combineReducers(
  {
    incomesReducer: undoable(incomesReducer)
  }
);
