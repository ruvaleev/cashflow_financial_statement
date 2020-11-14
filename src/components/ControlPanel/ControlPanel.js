import React from  'react';

import ExpenseForm from '../ExpenseForm'
import IncomeForm from '../IncomeForm'
import UndoRedoPanel from '../UndoRedoPanel'

function ControlPanel({addExpense, addIncome, undo, redo}) {
  return (
    <div className='controlPanel'>
      <IncomeForm onSubmit={(e) => {
        e.preventDefault();
        addIncome({
          title: e.target.title.value,
          value: e.target.value.value,
          isPassive: e.target.isPassive.value == 'true'
        }),
        e.target.title.value = '',
        e.target.value.value = '';
      }}/>
      <ExpenseForm onSubmit={(e) => {
        e.preventDefault();
        addExpense({
          title: e.target.title.value,
          value: e.target.value.value
        }),
        e.target.title.value = '',
        e.target.value.value = '';
      }}/>

      <UndoRedoPanel redo={redo} undo={undo}/>
    </div>
  )
}

export default ControlPanel;
