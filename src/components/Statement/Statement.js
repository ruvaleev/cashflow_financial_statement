import React from  'react';

import '../../assets/stylesheets/index.css';
import IncomeForm from '../IncomeForm';

function Statement({incomes}) {
  return (
    <>
      <IncomeForm/>
      <div className='blackTitle font-20px'>Доходы</div>
      <TableRow firstTitle='Описание' secondTitle='Доход' className='tableHeader bordered'/>
      {incomes && incomes.map((income, i) => {
        return <TableRow key={i} firstTitle={income.title} secondTitle={income.value} className='bordered withoutTopBorder'/>
      })}
    </>
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
