import { connect } from 'react-redux';

import Statement from './Statement';

const mapStateToProps = (state) => ({
  incomes: state.incomesReducer.present.incomes
})

export default connect(mapStateToProps)(Statement);
