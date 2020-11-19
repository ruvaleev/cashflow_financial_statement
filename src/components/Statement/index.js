import React from  'react';

import '../../assets/stylesheets/index.css';
import ControlPanel from '../ControlPanel';
import IncomesStatement from '../IncomesStatement';
import ExpensesStatement from '../ExpensesStatement';
import Total from '../Total';

function Statement() {
  return (
    <>
      <ControlPanel/>
      <div id='statementDocumentContainer'>
        <div id='statementDocument'>
          <h1>Отчет о Доходах и Расходах</h1>
          <IncomesStatement/>
          <ExpensesStatement/>
          <Total/>
        </div>
      </div>
    </>
  )
}

export default Statement;
