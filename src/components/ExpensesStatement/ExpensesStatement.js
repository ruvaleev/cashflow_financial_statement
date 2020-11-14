import React from  'react';

import { StatementTable } from '../shared/statementElements';
import { CountValues } from '../shared/commonFunctions';

function ExpensesStatement({expenses}) {
  return (
    <StatementTable dataArray={expenses} tableTitle='Расходы' leftHeader='Описание' rightHeader='Расход'>
      <ExpensesTotal expenses={expenses}/>
    </StatementTable>
  )
}

function ExpensesTotal({expenses}) {
  let totalExpenses = CountValues(expenses)

  return (
    <div>
      <div>
        <strong>Общий расход: </strong>
        {totalExpenses}
      </div>
    </div>
  )
}

export default ExpensesStatement;
