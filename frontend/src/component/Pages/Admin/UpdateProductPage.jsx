import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from 'react-router';
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
const UpdateProductPage = () => {

  const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]

const[product,setProduct] = useState({
  product_category:'',
  product_title:'',
  product_price:'',
  product_img:'',
  product_discription:'',
});



const navigate = useNavigate();
const {id} = useParams();
const {Load_Product_Data} = useSelector((state)=>state.cartReducer);
const dispatch = useDispatch();

const{product_title,product_category,product_img,product_price,product_discription} = product;


useEffect(()=>{

   Object.keys(Load_Product_Data).map((item)=>{
         const{product_id} = Load_Product_Data[item];

        if(product_id===id)
        {
          setProduct({...Load_Product_Data[item]});
        }
   })
},[]);


const handleUpdate=(e)=>{
    e.preventDefault()

    if(id){
      axios.put(`http://localhost:8081/update/${id}`,product)
      .then((res)=>{
         if(res.data)
         {
          alert('Product Updated Successfully');
          navigate('/admindashboard');
         }
         

      })
      .catch((err)=>{
        console.log(err);
      })
    }
}

  return (
    
    <div className="container" style={{width:'30%',border:'1px solid pink',marginTop:'50px',borderRadius:'10px',backgroundColor:'#fce4ec'}}>
    <h3 className="text-center" style={{margin:'revert',color:'#e91e63'}}>Update Product</h3>
    
    <form onSubmit={handleUpdate}>
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
          name='price'
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
          name='img_url'
          value={product_img}
          placeholder="Product Image URL"
          onChange={(e)=>{setProduct({...product,product_img:e.target.value})}}
        />
        {/* <p style={{ color: "#ff0000" }}>{errors.productImg && errors.productImg?.message}</p> */}
      </div>


      <div className="mb-3">
        <select 
        className="form-control"
        value={product_category}
        name='category'
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
          placeholder="Product Discription"
          name='description'
          value={product_discription}
          onChange={(e)=>{setProduct({...product,product_discription:e.target.value})}}
      
        />
        {/* <p style={{ color: "#ff0000" }}>{errors.description && errors.description?.message}</p> */}
      </div>

      <button className="btn" style={{width:'100%',marginBottom:'30px',backgroundColor:' #e91e63',color:'#fff'}}>
        Update Product
      </button>
    </form>
  </div>

  )
}

export default UpdateProductPage