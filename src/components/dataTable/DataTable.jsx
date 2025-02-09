import React from "react";
import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router";

const DataTable = (props) => {

  const handleDeleterow = (id) => {
    // API call to delete
    console.log(id + 'has been deleted')
  }

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell:(params) => {
        return (
            <div className="action">
                <Link to={`/${props.userID}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
                </Link>
                <div className="delete" onClick={() => handleDeleterow(params.row.id)}>
                <img src="/delete.svg" alt="" />
                </div>
            </div>
        )
    }
  }

  return (
    <div className="dataTable">
      <DataGrid 
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
            toolbar: {
                showQuickFilter:true,
                quickFilterProps: { debounceMs: 500 }
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
