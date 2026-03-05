import { useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams, GridRowParams } from "@mui/x-data-grid"; // type-only import
import DeleteIcon from "@mui/icons-material/Delete";
import type { BudgetItem } from "./types";

type BudgetItemProps = {
  items: BudgetItem[];
  onDelete: (id: number) => void;
};

export default function BudgetItems({ items, onDelete }: BudgetItemProps) {
  const [filterType, setFilterType] = useState<"All" | "Income" | "Expense">("All");

  const filteredItems =
    filterType === "All" ? items : items.filter((item) => item.type === filterType);

  const columns: GridColDef<BudgetItem, any>[] = [
    {
      field: "description",
      headerName: "Description",
      width: 200,
      sortable: true,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      sortable: true,
      renderCell: (params: GridRenderCellParams<BudgetItem>) => {
        const value = Number(params.row?.amount ?? 0);
        return <span style={{ color: value < 0 ? "red" : "green" }}>{value}</span>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      sortable: true,
      valueFormatter: (params: GridRenderCellParams<BudgetItem>) => {
        const date = params.row?.date ?? "";
        if (!date) return "";
        try {
          return new Date(date).toISOString().split("T")[0];
        } catch {
          return "";
        }
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 120,
      sortable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params: GridRowParams<BudgetItem>) => [
        <GridActionsCellItem
          key="delete"
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDelete(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 600, width: "75%", margin: "auto", marginTop: 30 }}>
      <div style={{ marginBottom: 10, textAlign: "center" }}>
        <label>Show: </label>
        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as "All" | "Income" | "Expense")
          }
        >
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      <DataGrid
        rows={filteredItems}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
          sorting: { sortModel: [{ field: "type", sort: "asc" }] },
        }}
        autoHeight
      />
    </div>
  );
}