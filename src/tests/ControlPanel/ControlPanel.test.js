import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Store from '../shared/Store';
import ControlPanel from '../../components/ControlPanel';

const mockStore = configureStore([]);

describe('ControlPanel', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());

    component = render(
      <Provider store={store}>
        <ControlPanel/>
      </Provider>
    )
  });

  it('renders ControlPanel correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
