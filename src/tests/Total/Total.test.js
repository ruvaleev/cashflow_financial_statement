import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Store from '../shared/Store';
import Total from '../../components/Total';

const mockStore = configureStore([]);

describe('Total', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());

    component = render(
      <Provider store={store}>
        <Total/>
      </Provider>
    )
  });

  it('renders Total correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
