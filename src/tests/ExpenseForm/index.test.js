import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';

import ExpenseForm from '../../components/ExpenseForm';

describe('Expense', () => {
  let callback;
  let component;
  
  beforeEach(() => {
    callback = jest.fn();
    component = render(
      <ExpenseForm onSubmit={data => {
        callback({title: data.title, value: data.value})
      }}/>
    )
  });

  it('calls callback with appropriate data', () => {
    const expenseTitleInput = component.getByLabelText('Статья расхода')
    userEvent.type(expenseTitleInput, 'New Expense')
    const expenseValueInput = component.getByLabelText('Сумма')
    userEvent.type(expenseValueInput, '500')
    const submitButton = screen.queryByText('Завести расход');
    userEvent.click(submitButton)
 
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(
      {title: 'New Expense', value: '500'}
    );
  });
});
