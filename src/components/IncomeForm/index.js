import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import { addIncome } from '../../redux/slices/incomes';
import IncomeForm from './IncomeForm';

const mapDispatchToProps = (dispatch) => ({
  addIncome: (data) => dispatch(addIncome(data)),
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo())
})

export default connect(null, mapDispatchToProps)(IncomeForm);
