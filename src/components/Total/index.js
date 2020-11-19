import { connect } from 'react-redux';

import Total from './Total';
import { CountValues } from '../shared/commonFunctions';

const mapStateToProps = (state) => ({
  cashFlow: CountValues(state.incomesReducer.present.incomes) - CountValues(state.expensesReducer.present.expenses)
})

export default connect(mapStateToProps)(Total);
