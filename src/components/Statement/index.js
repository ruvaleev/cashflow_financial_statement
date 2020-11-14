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
      <IncomesStatement/>
      <ExpensesStatement/>
      <Total/>
    </>
  )
}

export default Statement;
