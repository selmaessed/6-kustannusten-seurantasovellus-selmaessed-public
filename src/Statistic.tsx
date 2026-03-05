import type { BudgetItem } from "./types";

type StatisticProps = {
  items: BudgetItem[];
};

export default function Statistic({ items }: StatisticProps) {
  const totalIncome = items.filter(i => i.type === "Income").reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = items.filter(i => i.type === "Expense").reduce((sum, i) => sum + i.amount, 0);
  const saldo = totalIncome + totalExpense;

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Statistics</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpense}</p>
      <p>Saldo: {saldo}</p>
    </div>
  );
}