import React from  'react';

import ExpenseForm from '../ExpenseForm'
import IncomeForm from '../IncomeForm'
import UndoRedoPanel from '../UndoRedoPanel'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function ControlPanel({addExpense, addIncome, undoIncome, redoIncome, undoExpense, redoExpense}) {
  return (
    <div className='controlPanel'>
      <IncomeForm onSubmit={data => {addIncome({title: data.title, value: data.value, isPassive: data.isPassive})}}/>
      <UndoRedoPanel redo={redoIncome} undo={undoIncome}/>

      <ExpenseForm onSubmit={data => {addExpense({title: data.title, value: data.value})}}/>
      <UndoRedoPanel redo={redoExpense} undo={undoExpense}/>

      <button onClick={print} className='blackTitle blackButton font-16px'>Сохранить PDF</button>
    </div>
  )
}

function print() {
  const container = document.getElementById('statementDocumentContainer');
  const statementDocument = document.getElementById('statementDocument');
  statementDocument.style.width = '180mm';
  statementDocument.style.margin = '15mm';

  html2canvas(container)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 10);
      pdf.save('financial_statement.pdf');
    });

  statementDocument.style.width = '';
  statementDocument.style.margin = '';
}

export default ControlPanel;
