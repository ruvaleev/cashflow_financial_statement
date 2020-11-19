import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';

import UndoRedoPanel from '../../components/UndoRedoPanel';

describe('UndoRedoPanel', () => {
  let undoCallback;
  let redoCallback;
  let component;
  
  beforeEach(() => {
    undoCallback = jest.fn();
    redoCallback = jest.fn();
    component = render(<UndoRedoPanel undo={undoCallback} redo={redoCallback}/>)
  });

  it('dispatches Undo button click', () => {
    const undoButton = screen.queryByText('Отменить');
    userEvent.click(undoButton);
 
    expect(undoCallback).toHaveBeenCalledTimes(1);
  });

  it('dispatches Redo button click', () => {
    const redoButton = screen.queryByText('Повторить');
    userEvent.click(redoButton);
 
    expect(redoCallback).toHaveBeenCalledTimes(1);
  });
});
