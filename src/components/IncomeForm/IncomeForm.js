import React from  'react';

import { FormRow, FormSelectRow } from '../shared/formsElements';

function IncomeForm({addIncome, undo, redo}) {
  return (
    <div className='incomeForm'>
      <form className='bordered' onSubmit={(e) => {
        e.preventDefault();
        addIncome({
          title: e.target.title.value,
          value: e.target.value.value,
          isPassive: e.target.isPassive.value == 'true'
        }),
        e.target.title.value = '',
        e.target.value.value = '';
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
      <UndoRedoPanel redo={redo} undo={undo}/>
    </div>
  )
}

function UndoRedoPanel({redo, undo}) {
  return (
    <div className='undoRedoPanel'>
      <button className='blackTitle blackButton font-16px noLeftMargin' onClick={() => undo()}>Отменить</button>
      <button className='blackTitle blackButton font-16px noRightMargin' onClick={() => redo()}>Повторить</button>
    </div>
  )
}

export default IncomeForm;
