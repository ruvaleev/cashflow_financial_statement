import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Statement from './components/Statement';

function App() {
  return (
    <Provider store={store}>
      <Statement/>
    </Provider>
  )
}

export default App;
