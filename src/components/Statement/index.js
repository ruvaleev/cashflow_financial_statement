import React from  'react';

import '../../assets/stylesheets/index.css';
import ControlPanel from '../ControlPanel';
import IncomesStatement from '../IncomesStatement';
import ExpensesStatement from '../ExpensesStatement';

function Statement() {
  return (
    <>
      <ControlPanel/>
      <IncomesStatement/>
      <ExpensesStatement/>
    </>
  )
}

export default Statement;
