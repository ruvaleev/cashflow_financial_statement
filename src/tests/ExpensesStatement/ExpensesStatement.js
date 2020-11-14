import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Store from '../shared/Store';
import ExpensesStatement from '../../components/ExpensesStatement';

const mockStore = configureStore([]);

describe('ExpensesStatement', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());

    component = render(
      <Provider store={store}>
        <ExpensesStatement/>
      </Provider>
    )
  });

  it('renders ExpensesStatement correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
