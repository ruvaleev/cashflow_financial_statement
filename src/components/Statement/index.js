import { connect } from 'react-redux';

import Statement from './Statement';
import { addIncome } from '../../redux/slices/incomes';

const mapStateToProps = (state) => ({
  incomes: state.incomesReducer.incomes
})

const mapDispatchToProps = (dispatch) => ({
  addIncome: (data) => dispatch(addIncome(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Statement);
