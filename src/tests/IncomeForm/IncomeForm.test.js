import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ActionCreators } from 'redux-undo';

import Store from '../shared/Store';
import IncomeForm from '../../components/IncomeForm';

const mockStore = configureStore([]);
const leftClick = { button: 0 };

describe('IncomeForm', () => {
  let store;
  let component;
  
  beforeEach(() => {
    store = mockStore(Store());
    store.dispatch = jest.fn();

    component = render(
      <Provider store={store}>
        <IncomeForm/>
      </Provider>
    )
  });

  it('renders IncomeForm correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatches Undo button click', () => {
    const undoButton = screen.queryByText('Отменить');
    fireEvent.click(undoButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(ActionCreators.undo());
  });

  it('dispatches Redo button click', () => {
    const redoButton = screen.queryByText('Повторить');
    fireEvent.click(redoButton, leftClick);
 
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(ActionCreators.redo());
  });
});
