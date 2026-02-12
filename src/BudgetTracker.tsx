import { useState } from "react";
import BudgetItems from "./BudgetItems";
import type { BudgetItem } from "./types";

export default function BudgetTracker() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [type, setType] = useState<"Income" | "Expense">("Income");
  const [date, setDate] = useState("");
  const [items, setItems] = useState<BudgetItem[]>([]);

  const handleAdd = () => {
    if (!description || amount === "" || !date) {
      alert("Fill all fields!");
      return;
    }

    const newItem: BudgetItem = {
      id: Date.now(),
      description,
      amount: type === "Expense" ? -Number(amount) : Number(amount),
      type,
      date,
    };

    setItems([...items, newItem]);
    setDescription("");
    setAmount("");
    setDate("");
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Budget Tracker</h1>

      <input
        placeholder="Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(Number(e.target.value))
        }
      />
      <select
        value={type}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setType(e.target.value as "Income" | "Expense")
        }
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDate(e.target.value)
        }
      />
      <button onClick={handleAdd}>Add</button>

      <BudgetItems items={items} onDelete={handleDelete} />
    </div>
  );
}
