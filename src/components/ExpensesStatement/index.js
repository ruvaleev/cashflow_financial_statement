import { connect } from 'react-redux';

import ExpensesStatement from './ExpensesStatement';

const mapStateToProps = (state) => ({
  expenses: state.expensesReducer.present.expenses
})

export default connect(mapStateToProps)(ExpensesStatement);
