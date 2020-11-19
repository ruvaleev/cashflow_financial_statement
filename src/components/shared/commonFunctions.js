export function CountValues(incomes) {
  if (!incomes) return 0;

  return incomes.reduce(
    (sum, income) => sum + Number(income.value),
    0
  )
}
