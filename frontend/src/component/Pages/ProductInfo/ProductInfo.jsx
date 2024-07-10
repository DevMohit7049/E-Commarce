import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { DeleteCartData, LoadCartData, LoadProductData } from '../../Redux/Action';

const ProductInfo = () => {

const {id} = useParams();
const [productInfo,setProductInfo] = useState('');
const {Load_Product_Data} = useSelector((state)=>state.cartReducer);
const dispatch = useDispatch();
const {product_title,product_price,product_img,product_discription,product_id} = productInfo;

const cartItem = useSelector((state)=>state.cartReducer.Cart_Data);

useEffect(()=>{

  Load_Product_Data.map((item)=>{

    const{product_id} = item;

    if(product_id===id)
    {
      setProductInfo(item);
    }
 })
},[])



useEffect(()=>{

     dispatch(LoadProductData());

},[])


const AddToCart = (item) => {
  
  dispatch(LoadCartData(item));
};


const DeleteCart = (id) => {
  dispatch(DeleteCartData(id));
};



  return (

    <div className='product-info-container'>
         
           <div className="left-container">
              <img src={product_img} alt="product-info"/>
           </div>

           <div className="right-container">
               <h2>{product_title}</h2>
               <h3>Rs.{product_price}</h3>
               <h5 style={{color:'gray'}}>Description  :</h5>
               <div className="para-box">
                 <p>{product_discription}</p>
               </div>
               {
                 cartItem.some((item)=>item.product_id===product_id) 
                 ?
                 <button className='btn btn-danger' style={{color:'#fff'}} onClick={()=>DeleteCart(product_id)}>Delete to cart</button>
                 :
                 <button className='btn' style={{backgroundColor:'#e91e63',color:'#fff'}} onClick={()=>AddToCart(productInfo)}>Add To Cart</button>
               }
               <button className='btn' style={{backgroundColor:'#e91e63',color:'#fff'}}>Buy Now</button>
           </div>
    </div>
  )
}

export default ProductInfo