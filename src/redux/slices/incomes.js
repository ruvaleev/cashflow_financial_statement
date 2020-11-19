import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import httpClient from '../../components/shared/httpClient';

export const fetchIncomes = createAsyncThunk(
  'incomes/fetchAll',
  async() => {
    const response = await httpClient.get('/incomes');

    return response.data;
  }
)

const initialState = {
  incomes: [], isLoading: false, isError: false, error: null
};

const incomesSlice = createSlice({
  name: 'incomes',
  initialState,
  reducers: {
    addIncome(state, action) {
      state.incomes = state.incomes.concat(
        {
          "id": state.incomes.length,
          "title": action.payload.title,
          "value": action.payload.value,
          "isPassive": action.payload.isPassive
        }
      )
    }
  },
  extraReducers: {
    [fetchIncomes.pending]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [fetchIncomes.fulfilled]: (state, action) => ({
      ...initialState,
      incomes: action.payload
    }),
    [fetchIncomes.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      error: action.payload.error
    })
  }
})

export const { addIncome } = incomesSlice.actions;
export default incomesSlice.reducer;
