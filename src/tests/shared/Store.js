const defaultIncomesReducer = {
  present: {
    "incomes": [
      { "id": 0,"title": "зарплата", "value": 300, "isPassive": false },
      { "id": 1,"title": "недвижимость", "value": 200, "isPassive": true }
    ]
  }
}

const defaultExpensesReducer = {
  present: {
    "expenses": [
      { "id": 0,"title": "ипотека", "value": 200 },
      { "id": 1,"title": "кредит за обучение", "value": 100 }
    ]
  }
}
function Store (props = {}) {
  return (
    {
      incomesReducer: props.incomesReducer || defaultIncomesReducer,
      expensesReducer: props.expensesReducer || defaultExpensesReducer
    }
  )
}

export default Store;
