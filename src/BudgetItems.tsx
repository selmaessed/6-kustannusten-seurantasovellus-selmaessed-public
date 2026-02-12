import type { BudgetItem } from "./types";

type Props = {
  items: BudgetItem[];
  onDelete: (id: number) => void;
};

export default function BudgetItems({ items, onDelete }: Props) {
  return (
    <div style={{ marginTop: "30px" }}>
      <table style={{ margin: "0 auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "5px 15px" }}>Description</th>
            <th style={{ padding: "5px 15px" }}>Amount</th>
            <th style={{ padding: "5px 15px" }}>Date</th>
            <th style={{ padding: "5px 15px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: "5px 15px" }}>{item.description}</td>
              <td
                style={{
                  padding: "5px 15px",
                  color: item.amount < 0 ? "red" : "green",
                }}
              >
                {item.amount}
              </td>
              <td style={{ padding: "5px 15px" }}>{item.date}</td>
              <td style={{ padding: "5px 15px" }}>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
