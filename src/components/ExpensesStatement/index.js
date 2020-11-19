import { connect } from 'react-redux';

import ExpensesStatement from './ExpensesStatement';

const mapStateToProps = (state) => ({
  expenses: state.expensesReducer.present.expenses,
  isLoading: state.expensesReducer.present.isLoading,
  isError: state.expensesReducer.present.isError,
  error: state.expensesReducer.present.error
})

export default connect(mapStateToProps)(ExpensesStatement);
