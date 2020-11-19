import { connect } from 'react-redux';

import IncomesStatement from './IncomesStatement';

const mapStateToProps = (state) => ({
  incomes: state.incomesReducer.present.incomes,
  isLoading: state.incomesReducer.present.isLoading,
  isError: state.incomesReducer.present.isError,
  error: state.incomesReducer.present.error
})

export default connect(mapStateToProps)(IncomesStatement);
