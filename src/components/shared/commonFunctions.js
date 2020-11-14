export function CountValues(incomes) {
  return incomes.reduce(
    (sum, income) => sum + Number(income.value),
    0
  )
}
