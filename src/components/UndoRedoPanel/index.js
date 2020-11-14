import React from  'react';

function UndoRedoPanel({redo, undo}) {
  return (
    <div className='undoRedoPanel'>
      <button className='blackTitle blackButton font-16px noLeftMargin' onClick={() => undo()}>Отменить</button>
      <button className='blackTitle blackButton font-16px noRightMargin' onClick={() => redo()}>Повторить</button>
    </div>
  )
}

export default UndoRedoPanel;
