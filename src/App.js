import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Statement from './components/Statement';
import { fetchIncomes } from './redux/slices/incomes';
import { fetchExpenses } from './redux/slices/expenses';

store.dispatch(fetchIncomes());
store.dispatch(fetchExpenses());

function App() {
  return (
    <Provider store={store}>
      <Statement/>
    </Provider>
  )
}

export default App;
