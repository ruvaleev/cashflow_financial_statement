import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

import Statement from './Statement';
import { addIncome } from '../../redux/slices/incomes';

const mapStateToProps = (state) => ({
  incomes: state.incomesReducer.present.incomes
})

const mapDispatchToProps = (dispatch) => ({
  addIncome: (data) => dispatch(addIncome(data)),
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
