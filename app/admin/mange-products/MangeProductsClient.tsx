"use client";

import { Product } from "@prisma/client";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
interface MangeProductsClientProps {
  products: Product[];
}
const MangeProductsClient: React.FC<MangeProductsClientProps> = ({
  products,
}) => {
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 220 },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800"> {params.row.price} </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    {
      field: "inStock",
      headerName: "In stock",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            {" "}
            {params.row.inStock === true ? "In stock" : "Out of stock"}{" "}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return <div> Action </div>;
      },
    },
  ];

  return (
    <div className="max-w-[1150px] m-auto tex-xl">
      <div className="mb-4 mt-8">
        <Heading title="Mange products" center />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default MangeProductsClient;
