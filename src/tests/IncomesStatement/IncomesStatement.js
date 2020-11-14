import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Store from '../shared/Store';
import Statement from '../../components/IncomesStatement';

const mockStore = configureStore([]);

describe('IncomesStatement', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());

    component = render(
      <Provider store={store}>
        <IncomesStatement/>
      </Provider>
    )
  });

  it('renders IncomesStatement correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
