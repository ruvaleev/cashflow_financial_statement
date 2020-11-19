import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';

import IncomeForm from '../../components/IncomeForm';

describe('IncomeForm', () => {
  let callback;
  let component;
  
  beforeEach(() => {
    callback = jest.fn();
    component = render(
      <IncomeForm onSubmit={data => {
        callback({title: data.title, value: data.value, isPassive: data.isPassive})
      }}/>
    )
  });

  it('calls callback with appropriate data', () => {
    const incomeTitleInput = component.getByLabelText('Статья дохода')
    userEvent.type(incomeTitleInput, 'New Income')
    const incomeValueInput = component.getByLabelText('Сумма')
    userEvent.type(incomeValueInput, '500')
    const incomeIsPassiveSelect = component.getByLabelText('Доход пассивный?')
    userEvent.selectOptions(incomeIsPassiveSelect, 'Нет')
    const submitButton = screen.queryByText('Завести доход');
    userEvent.click(submitButton)
 
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(
      {title: 'New Income', value: '500', isPassive: false}
    );
  });
});
