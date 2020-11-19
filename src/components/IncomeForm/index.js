import React from  'react';

import { FormRow, FormSelectRow } from '../shared/formsElements';

function IncomeForm({onSubmit}) {
  return (
    <div className='incomeForm'>
      <form className='bordered' onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title: e.target.elements.title.value,
          value: e.target.elements.value.value,
          isPassive: e.target.elements.isPassive.value == 'true'
        });
        e.target.elements.title.value = '';
        e.target.elements.value.value = '';
      }}>
        <FormRow type='text' name='title' label='Статья дохода' required={true} className='bordered withoutTopBorder'/>
        <FormRow type='number' name='value' label='Сумма' className='bordered withoutTopBorder'/>
        <FormSelectRow
          name='isPassive'
          label='Доход пассивный?'
          className='bordered withoutTopBorder'
          options={[
            { value: true, title: 'Да' },
            { value: false, title: 'Нет' }
          ]}/>
        <button className='blackTitle blackButton font-18px'>Завести доход</button>
      </form>
    </div>
  )
}

export default IncomeForm;
