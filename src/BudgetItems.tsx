import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"; // type-only import
import DeleteIcon from "@mui/icons-material/Delete";
import type { BudgetItem } from "./types";

type BudgetItemProps = {
  items: BudgetItem[];
  onDelete: (id: number) => void;
};

function BudgetItems({ items, onDelete }: BudgetItemProps) {
  const columns: GridColDef<BudgetItem, any>[] = [
    { field: "description", headerName: "Description", width: 200, sortable: true },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      sortable: true,
      renderCell: (params: GridRenderCellParams<any, BudgetItem>) => {
        const value = params.row.amount; // aina ota row.amount, ei params.value
        return <span style={{ color: value < 0 ? "red" : "green" }}>{value}</span>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      sortable: true,
      valueFormatter: (params: GridRenderCellParams<any, BudgetItem>) => {
        const value = params.row.date;
        return value ? new Date(value).toISOString().split("T")[0] : "";
      },
    },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => onDelete(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 500, width: "70%", margin: "auto", marginTop: 30 }}>
      <DataGrid
        rows={items}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
        autoHeight
      />
    </div>
  );
}

export default BudgetItems;