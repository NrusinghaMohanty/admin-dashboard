import React, { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import AddBtn from "../../components/addBtn/AddBtn";
import { products } from "../../data";

const Products = () => {
    const [open,setOpen] = useState(false)

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "img",
          headerName: "Image",
          width: 100,
          renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
          },
        },
        {
          field: "title",
          type: "string",
          headerName: "Title",
          width: 250,
        },
        {
          field: "color",
          type: "string",
          headerName: "Color",
          width: 150,
        },
        {
          field: "price",
          type: "string",
          headerName: "Price",
          width: 200,
        },
        {
          field: "producer",
          headerName: "Producer",
          type: "string",
          width: 200,
        },
        {
          field: "createdAt",
          headerName: "Created At",
          width: 200,
          type: "string",
        },
        {
          field: "inStock",
          headerName: "In Stock",
          width: 150,
          type: "boolean",
        },
      ];

    return (
    <div className="products">
        <div className="info">
            <h1>Products</h1>
            <button onClick={() => setOpen(true)}>Add New Products</button>
        </div>
        <DataTable value='products' columns={columns} rows={products} />
        {open && <AddBtn value='products' columns={columns} setOpen={setOpen} />}
    </div>
    )
};

export default Products;
