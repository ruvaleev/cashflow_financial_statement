import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  "incomes": [
    { "id": 0,"title": "зарплата", "value": 300, "isPassive": false },
    { "id": 1,"title": "недвижимость", "value": 200, "isPassive": true }
  ]
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
  }
})

export const { addIncome } = incomesSlice.actions;
export default incomesSlice.reducer;
