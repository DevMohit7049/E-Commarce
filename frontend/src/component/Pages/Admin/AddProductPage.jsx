import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { addproductSchema } from "../../Validation/SignupValidation/addProductForm/AddProduct";
import shortid from "shortid";

const AddProductPage = () => {

    const categoryList = [
        {
            name: 'Fashion'
        },
        {
            name: 'Shirt'
        },
        {
            name: 'Jacket'
        },
        {
            name: 'Mobile'
        },
        {
            name: 'Laptop'
        },
        {
            name: 'Shoes'
        },
        {
            name: 'Home'
        },
        {
            name: 'Books'
        }
    ]

    const navigate = useNavigate()
    const [product,setProduct] = useState({
        product_id:'',
        product_category:'',
        product_title:'',
        product_price:'',
        product_img:'',
        product_discription:'',
    })
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(product.product_category==='' || product.product_title==='' || product.product_price==='' || product.product_img===''|| product.product_discription===''){
           alert('All Fields Are Required'); 
        }
        product.product_id = shortid.generate();
        axios.post('http://localhost:8081/addproduct',product)
        .then((res)=>{
           if(res.data)
           {
            alert('Product Added Successfully');
            navigate('/admindashboard');
           }
         
        })
        .catch((err)=>{
           console.log(err);
        })
    } 

  //  const{
  //      handleSubmit,formState:{errors}} = useForm({
  //       resolver:yupResolver(addproductSchema)
  //  }); 

   const {product_title,product_category,product_price,product_img,product_discription} = product

  return (
    <div className="container" style={{width:'30%',border:'1px solid pink',marginTop:'50px',borderRadius:'10px',backgroundColor:'#fce4ec'}}>
      <h3 className="text-center" style={{margin:'revert',color:'#e91e63'}}>Add Product</h3>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Title"
            name="title"
            value={product_title}
            onChange={(e)=>{setProduct({...product,product_title:e.target.value})}}
       
          />
          {/* <p style={{ color: "#ff0000" }}>{errors.title && errors.title?.message}</p> */}
        </div>

        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            value={product_price}
            onChange={(e)=>{setProduct({...product,product_price:e.target.value})}}
            placeholder="Product Price"
          />
          {/* <p style={{ color: "#ff0000" }}>{errors.price && errors.price?.message}</p> */}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Image URL"
            value={product_img}
            onChange={(e)=>{setProduct({...product,product_img:e.target.value})}}
          />
          {/* <p style={{ color: "#ff0000" }}>{errors.productImg && errors.productImg?.message}</p> */}
        </div>


        <div className="mb-3">
          <select 
          className="form-control"
           value={product_category}
            onChange={(e)=>{setProduct({...product,product_category:e.target.value})}}
          >
              <option>Select Product Category</option>
               {categoryList.map((item,index)=>{
                  const {name} = item
                  return(
                    <>
                     <option key={index} value={name}>{name}</option>
                    </>
                  )

              })}
          </select>
          {/* <p style={{ color: "#ff0000" }}>{errors.category && errors.category?.message}</p> */}
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Product Description"
            value={product_discription}
            onChange={(e)=>{setProduct({...product,product_discription:e.target.value})}}
        
          />
          {/* <p style={{ color: "#ff0000" }}>{errors.description && errors.description?.message}</p> */}
        </div>

        <button className="btn" style={{width:'100%',marginBottom:'30px',backgroundColor:' #e91e63',color:'#fff'}}>
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProductPage;
