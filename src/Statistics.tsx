import type { BudgetItem } from "./types";

type StatisticsProps = {
    items: BudgetItem[];
};

export default function Statistics({ items }: StatisticsProps) {
    const totalIncome = items.filter(i => i.amount > 0).reduce((sum, i) => sum + i.amount, 0);
    const totalExpense = items.filter(i => i.amount < 0).reduce((sum, i) => sum + i.amount, 0);
    const saldo = totalIncome + totalExpense;

    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h1>Statistics</h1>
            <p>Total Income: {totalIncome}</p>
            <p>Total Expenses: {totalExpense}</p>
            <p>Saldo: {saldo}</p>
        </div>
    );
}