import React from "react";

import Swal from "sweetalert2";
import { useDeleteProdMutation, useGetProdQuery } from "../../../redux/services/productapi";

const AdminProducts = () => {
  const { data, refetch } = useGetProdQuery();

  const [deleteProductById ,deleteResponse] = useDeleteProdMutation();
  const handleDelete = (productId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteProductById(productId);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{product.title}</td>

                <td>${product.price}</td>

                <td>
                  <button
                    onClick={() => {
                      handleDelete(product._id);
                    }}
                    style={{
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
