import React from  'react';

import '../../assets/stylesheets/index.css';
import IncomeForm from '../IncomeForm';
import IncomesStatement from '../IncomesStatement';

function Statement() {
  return (
    <>
      <IncomeForm/>
      <IncomesStatement/>
    </>
  )
}

export default Statement;
