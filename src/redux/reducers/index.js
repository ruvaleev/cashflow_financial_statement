import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import incomesReducer from '../slices/incomes';
import expensesReducer from '../slices/expenses';

export default combineReducers(
  {
    incomesReducer: undoable(incomesReducer),
    expensesReducer: undoable(expensesReducer)
  }
);
