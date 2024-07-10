import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { LoadCartData, LoadProductData } from "../../Redux/Action";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineFrown } from 'react-icons/ai';
const CategoryPage=()=>
{
      
    const category = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
            name: 'Fashion'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
            name: 'Shirt'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
            name: 'Jacket'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
            name: 'Mobile'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
            name: 'Laptop'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
            name: 'shoes'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
            name: 'Home'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
            name: 'Books'
        }
    ]
    

    // Load Product Data From Redux //
    const {Load_Product_Data} = useSelector((state)=>state.cartReducer);

    // Load CartData From Redux //
    const cartItem = useSelector((state) => state.cartReducer.Cart_Data);

    const dispatch = useDispatch();
    const {categoryname} = useParams();
    const navigate = useNavigate();

    // Filter Product //
    const filterProduct = Load_Product_Data.filter((obj)=>obj.product_category.includes(categoryname));
    
    // Set Cart Data In LocalStorage //
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItem));
    }, [cartItem]);


    // Call The Redux CartData Function //
    const AddCart = (item) => {
      dispatch(LoadCartData(item));
    };

    return(
        <>
    <div className="cart-container">
        <div className="cart-heading">
          <h2 style={{fontWeight:'600'}}>{categoryname}</h2>
        </div>

            <div className="grid-container">
            { filterProduct.length > 0 ?
              <>
                {filterProduct.map((item, index) => {
                const{product_img,product_price,product_title,product_id}= item;
   
               return (
                 <>
                   <div className="card">
                     <img
                       src={product_img}
                       alt="card-img"
                       onClick={()=>navigate(`/productInfo/${product_id}`)}
                     />
                     <div className="card-body" key={index}>
                       <h5 className="card-title">{product_title.substring(0,25)}</h5>
                       <p className="card-text">₹{product_price}</p>
                       {
                      cartItem.some((product)=>product.product_id===product_id)
                      ?
                      <a
                      href="#"
                      className="btn"
                      style={{
                        backgroundColor: "#e91e63",
                        color: "#fff",
                        width: "100%",
                      }}
                    >
                      Delete To Cart
                    </a>
                    :
                     <a
                      href="#"
                      className="btn"
                      style={{
                        backgroundColor: "#e91e63",
                        color: "#fff",
                        width: "100%",
                      }}
                      onClick={() => {
                        AddCart(item);
                      }}
                    >
                      Add To Card
                    </a>
                    }
                       
                     </div>
                   </div>
                 </>
               );
             })}
              </>
              :
              <div>
              <div className="alert alert-warning d-flex align-items-center" role="alert">
                 <AiOutlineFrown size={20} style={{ marginRight: '10px' }} />
                <div>No Product Found</div>
              </div>
            </div>
            }
             
           </div>

      
      </div>
        </>
    )
}
export default CategoryPage;