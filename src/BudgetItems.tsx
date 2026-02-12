import type { BudgetItem } from "./types";

interface Props {
  items: BudgetItem[];
  onDelete: (id: number) => void;
}

export default function BudgetItems({ items, onDelete }: Props) {
  return (
    <table style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td style={{ color: item.amount < 0 ? "red" : "green" }}>
              {item.amount}
            </td>
            <td>{item.date}</td>
            <td>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

