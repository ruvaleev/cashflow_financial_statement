const defaultIncomesReducer = {
    present: {
      "incomes": [
        { "id": 0,"title": "зарплата", "value": 300, "isPassive": false },
        { "id": 1,"title": "недвижимость", "value": 200, "isPassive": true }
      ]
    }
  }
function Store (props = {}) {
  return (
    {
      incomesReducer: props.incomesReducer || defaultIncomesReducer
    }
  )
}

export default Store;
