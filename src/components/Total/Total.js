import React from  'react';

function Total({cashFlow}) {
  return (
    <div className='cashFlowResult font-20px'>
      <strong>Ежемесячный денежный поток: </strong>
      {cashFlow}
    </div>
  )
}

export default Total;
