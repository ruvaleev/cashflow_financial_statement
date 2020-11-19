import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import httpClient from '../../components/shared/httpClient';

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchAll',
  async() => {
    const response = await httpClient.get('/expenses');

    return response.data;
  }
)

const initialState = {
  incomes: [], isLoading: false, isError: false, error: null
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
  },
  extraReducers: {
    [fetchExpenses.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [fetchExpenses.fulfilled]: (state, action) => ({
      ...initialState,
      expenses: action.payload
    }),
    [fetchExpenses.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload.error
    })
  }
})

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
