import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Store from '../shared/Store';
import Statement from '../../components/Statement';

const mockStore = configureStore([]);

describe('Statement', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());

    component = render(
      <Provider store={store}>
        <Statement/>
      </Provider>
    )
  });

  it('renders Statement correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
