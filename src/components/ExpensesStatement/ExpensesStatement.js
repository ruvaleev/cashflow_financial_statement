import React from  'react';

import { StatementTable } from '../shared/statementElements';
import { CountValues } from '../shared/commonFunctions';

function ExpensesStatement({expenses, isLoading, isError, error}) {
  return (
    <StatementTable
      dataArray={expenses}
      tableTitle='Расходы'
      leftHeader='Описание'
      rightHeader='Расход'
      isLoading={isLoading}
      isError={isError}
      error={error}
    >
      <ExpensesTotal expenses={expenses}/>
    </StatementTable>
  )
}

function ExpensesTotal({expenses}) {
  let totalExpenses = CountValues(expenses)

  return (
    <div>
      <strong>Общий расход: </strong>
      {totalExpenses}
    </div>
  )
}

export default ExpensesStatement;
