import React from  'react';

import '../../assets/stylesheets/index.css';
import { FormRow, FormSelectRow } from '../shared/formsElements';

function Statement({incomes, addIncome, undo, redo}) {
  return (
    <>
      <NewIncomeForm dispatch={addIncome} undo={undo} redo={redo}/>
      <div className='blackTitle font-20px'>Доходы</div>
      <TableRow firstTitle='Описание' secondTitle='Доход' className='tableHeader bordered'/>
      {incomes && incomes.map((income, i) => {
        return <TableRow key={i} firstTitle={income.title} secondTitle={income.value} className='bordered withoutTopBorder'/>
      })}
    </>
  )
}

function NewIncomeForm({dispatch, undo, redo}) {
  return (
    <div className='newIncomeForm'>
      <form className='bordered' onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          title: e.target.title.value,
          value: e.target.value.value,
          isPassive: e.target.isPassive.value
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
      <div className='undoRedoPanel'>
        <button className='blackTitle blackButton font-16px noLeftMargin' onClick={() => undo()}>Отменить</button>
        <button className='blackTitle blackButton font-16px noRightMargin' onClick={() => redo()}>Повторить</button>
      </div>
    </div>
  )
}

function TableRow({firstTitle, secondTitle, className}) {
  return (
    <div className={`tableRow ${className}`}>
      <div className='leftSide'>{firstTitle}</div>
      <div className='rightSide'>{secondTitle}</div>
    </div>
  )
}

export default Statement;
