import { connect } from 'react-redux';

import IncomesStatement from './IncomesStatement';

const mapStateToProps = (state) => ({
  incomes: state.incomesReducer.present.incomes
})

export default connect(mapStateToProps)(IncomesStatement);
