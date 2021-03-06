import React from  'react';

import { StatementTable } from '../shared/statementElements';
import { CountValues } from '../shared/commonFunctions';

function IncomesStatement({incomes, isLoading, isError, error}) {
  return (
    <>
      <StatementTable
        dataArray={incomes}
        tableTitle='Доходы'
        leftHeader='Описание'
        rightHeader='Доход'
        isLoading={isLoading}
        isError={isError}
        error={error}
      >
        <IncomeTotal incomes={incomes}/>
      </StatementTable>
    </>
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
