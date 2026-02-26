import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import type { BudgetItem } from "./types";

type BudgetItemProps = {
  items: BudgetItem[];
  onDelete: (id: number) => void;
};

function BudgetItems(props: BudgetItemProps) {
  const columns: GridColDef<BudgetItem>[] = [
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      renderCell: ({ value }) => (
        <span style={{ color: Number(value) < 0 ? "red" : "green" }}>
          {value}
        </span>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      valueFormatter: ({ value }) =>
        value ? new Date(value as string).toISOString().split("T")[0] : "",
    },
    {
      field: "type",
      headerName: "Type",
      width: 120,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => props.onDelete(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 500, width: "70%", margin: "auto", marginTop: 30 }}>
      <DataGrid
        rows={props.items}
        columns={columns}
        getRowId={(row) => row.id}
        autoPageSize
      />
    </div>
  );
}

export default BudgetItems;