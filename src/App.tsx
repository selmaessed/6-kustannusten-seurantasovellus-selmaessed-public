import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import type { BudgetItem } from "./types";
import BudgetTracker from "./BudgetTracker";
import Home from "./Home";
import Statistic from "./Statistic";

export default function App() {
  const [items, setItems] = useState<BudgetItem[]>([]);

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAdd = (item: BudgetItem) => {
    setItems([...items, item]);
  };

  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/budget">Budget</Link> |{" "}
        <Link to="/statistics">Statistics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Outlet contexti BudgetTrackerille */}
        <Route path="/budget" element={<Outlet context={{ items, handleAdd, handleDelete }} />}>
          <Route index element={<BudgetTracker />} />
        </Route>
        <Route path="/statistics" element={<Statistic items={items} />} />
      </Routes>
    </Router>
  );
}