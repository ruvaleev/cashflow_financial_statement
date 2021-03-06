import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import { addExpense } from '../../redux/slices/expenses';
import { addIncome } from '../../redux/slices/incomes';
import ControlPanel from './ControlPanel';

const mapDispatchToProps = (dispatch) => ({
  addExpense: (data) => dispatch(addExpense(data)),
  addIncome: (data) => dispatch(addIncome(data)),
  undoExpense: () => dispatch(ActionCreators.undo()),
  redoExpense: () => dispatch(ActionCreators.redo()),
  undoIncome: () => dispatch(ActionCreators.undo()),
  redoIncome: () => dispatch(ActionCreators.redo())
})

export default connect(null, mapDispatchToProps)(ControlPanel);
