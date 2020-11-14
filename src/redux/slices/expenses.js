import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "expenses": [
    { "id": 0,"title": "ипотека", "value": 200 },
    { "id": 1,"title": "кредит за обучение", "value": 100 }
  ]
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action) {
      state.expenses = state.expenses.concat(
        {
          "id": state.expenses.length,
          "title": action.payload.title,
          "value": action.payload.value
        }
      )
    }
  }
})

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
