import React from  'react';

function IncomesStatement({incomes}) {
  return (
    <>
      <div className='blackTitle font-20px'>Доходы</div>
      <div className='tableContent flex'>
        <div className='leftPart'>
          <TableRow firstTitle='Описание' secondTitle='Доход' className='tableHeader bordered withoutTopBorder'/>
          {incomes && incomes.map((income, i) => {
            return <TableRow key={i} firstTitle={income.title} secondTitle={income.value} className='bordered withoutTopBorder'/>
          })}
        </div>
        <div className='rightPart flex bordered'>
          <IncomeTotal incomes={incomes}/>
        </div>
      </div>
    </>
  )
}

function TableRow({firstTitle, secondTitle, className}) {
  return (
    <div className={`flex tableRow ${className}`}>
      <div className='leftSide'>{firstTitle}</div>
      <div className='rightSide'>{secondTitle}</div>
    </div>
  )
}

function CountValues(incomes) {
  return incomes.reduce(
    (sum, income) => sum + Number(income.value),
    0
  )
}

function IncomeTotal({incomes}) {
  let passiveIncome = CountValues(incomes.filter((income) => income.isPassive))
  let totalIncome = CountValues(incomes)

  return (
    <div>
      <div>
        <strong>Пассивный доход: </strong>
        {passiveIncome}
      </div>
      <div>
        <strong>Общий доход: </strong>
        {totalIncome}
      </div>
    </div>
  )
}

export default IncomesStatement;
