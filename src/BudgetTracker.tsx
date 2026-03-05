import BudgetItems from "./BudgetItems";
import type { BudgetItem } from "./types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

type OutletContextType = {
  items: BudgetItem[];
  handleAdd: (item: BudgetItem) => void;
  handleDelete: (id: number) => void;
};

export default function BudgetTracker() {
  const { items, handleAdd, handleDelete } = useOutletContext<OutletContextType>();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [type, setType] = useState<"Income" | "Expense">("Income");
  const [date, setDate] = useState("");

  const onAddClick = () => {
    if (!description || amount === "" || !date) return alert("Fill all fields!");
    const amt = Number(amount);
    if (isNaN(amt)) return alert("Amount must be a number");

    handleAdd({
      id: Date.now(),
      description,
      amount: type === "Expense" ? -Math.abs(amt) : amt,
      type,
      date: date || new Date().toISOString().split("T")[0], // default tänään
    });

    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Budget Tracker</h1>

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value === "" ? "" : Number(e.target.value))
        }
      />
      <select value={type} onChange={(e) => setType(e.target.value as "Income" | "Expense")}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={onAddClick}>Add</button>

      <BudgetItems items={items} onDelete={handleDelete} />
    </div>
  );
}