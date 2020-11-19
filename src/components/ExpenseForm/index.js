import React from  'react';

import { FormRow } from '../shared/formsElements';

function ExpenseForm({onSubmit}) {
  return (
    <div className='expenseForm'>
      <form className='bordered' onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title: e.target.elements.title.value,
          value: e.target.elements.value.value
        });
        e.target.elements.title.value = '';
        e.target.elements.value.value = '';
      }}>
        <FormRow type='text' name='title' label='Статья расхода' required={true} className='bordered withoutTopBorder'/>
        <FormRow type='number' name='value' label='Сумма' className='bordered withoutTopBorder'/>
        <button className='blackTitle blackButton font-18px'>Завести расход</button>
      </form>
    </div>
  )
}

export default ExpenseForm;
