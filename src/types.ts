export type BudgetItem = {
  id: number;
  description: string;
  amount: number;
  type: "Income" | "Expense";
  date: string;
};
