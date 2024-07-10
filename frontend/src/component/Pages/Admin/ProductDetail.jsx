import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoadProductData } from "../../Redux/Action";
import { useSelector, useDispatch } from "react-redux";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { Load_Product_Data } = useSelector((state) => state.cartReducer);
  
  useEffect(() => {
    dispatch(LoadProductData());
  }, []);


  const DeleteProduct=(product_id)=>{
    
       confirm("Are You Sure To Delete This Product");
       axios.delete(`http://localhost:8081/DeleteProduct/${product_id}`)
       .then((res)=>{
          
          if(res.data)
          {
            alert('Product Deleted Successfully');
            window.location.reload();
          }
          
       })
       .catch((err)=>{
         console.log(err);
       })
  }

  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <h4>All Product</h4>
        <Link to={"/AddProductPage"} style={{ color: "black" }}>
          <button className="btn" style={{ backgroundColor: "pink" }}>
            Add Product
          </button>
        </Link>
      </div>

      <div className="container mt-4">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Id</th>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Product Price</th>
              <th>Product Category</th>
              <th>Date</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(Load_Product_Data).map((item, index) => {
              const {
                product_id,
                product_img,
                product_title,
                product_price,
                product_category,
                date,
              } = Load_Product_Data[item];

              const DateWithTimeStamp = date;
              const newDate = new Date(DateWithTimeStamp);
              const normalDate = newDate.toLocaleDateString();

              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{product_id}</td>
                    <td>
                      <img
                        src={product_img}
                        alt="product_img"
                        height={100}
                        width={100}
                      />
                    </td>
                    <td>{product_title}</td>
                    <td>{product_price}</td>
                    <td>{product_category}</td>
                    <td>{normalDate}</td>

                    <td>
                      <Link to={`/UpdateProductPage/${product_id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>

                    <td>
                      <button className="btn btn-danger"
                      onClick={()=>DeleteProduct(product_id)}>Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDetail;
