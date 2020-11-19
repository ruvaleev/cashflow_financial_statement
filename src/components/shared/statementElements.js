import React from  'react';

  export function StatementTable({dataArray, tableTitle, leftHeader, rightHeader, isLoading, isError, error, children}) {
  return (
    <>
      <div className='blackTitle font-20px'>{tableTitle}</div>
      {
        isLoading
        ? <div className='flex justify-center padding-1em'>Loading...</div>
        :
        isError
          ? <div className='flex justify-center padding-1em'>{error}</div>
          : <Content leftHeader={leftHeader} rightHeader={rightHeader} dataArray={dataArray} children={children}/>
      }
    </>
  )
}

function Content({leftHeader, rightHeader, dataArray, children}) {
  return (
    <div className='tableContent flex'>
      <div className='leftPart'>
        <TableRow firstTitle={leftHeader} secondTitle={rightHeader} className='tableHeader bordered'/>
        {dataArray && dataArray.map((data, i) => {
          return <TableRow key={i} 
                  firstTitle={data.title}
                  secondTitle={data.value}
                  className='bordered withoutTopBorder'/>
        })}
      </div>
      <div className='rightPart flex bordered'>
        {children}
      </div>
    </div>
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
