import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteCartData, LoadCartData, LoadProductData } from "../Redux/Action";
import toast from "react-hot-toast";

const ProductCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { Load_Product_Data } = useSelector((state) => state.cartReducer);
  const cartItem = useSelector((state) => state.cartReducer.Cart_Data);

  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);


  useEffect(() => {
    dispatch(LoadProductData());
  }, []);


  const AddCart = (item) => {
    dispatch(LoadCartData(item));
  };

  
  const DeleteCart=(id)=>{
    
    dispatch(DeleteCartData(id));
  }

  //   {
  //     id: 1,
  //     image:
  //       "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 150,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  //     title: "Kaushalam kalash Copper Pot",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 120,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 130,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 120,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 150,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  //     title: "Kaushalam kalash Copper Pot",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 120,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 130,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  //     title: "Hand Painted Blue Kaushalam Tea Pot in Aluminium",
  //     desc: "Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  //     price: 120,
  //     trendingProductName: "Featured",
  //     quantity: 1,
  //   },
  // ];

  return (
    <>
      <div className="cart-container">
        <div className="cart-heading">
          <h2>Bestselling Products</h2>
        </div>

        <div className="grid-container">
          {Load_Product_Data.map((item, index) => {

            const { product_img, product_title, product_price, product_id }=item;

            return (
              <>
                <div className="card">
                  <img
                    src={product_img}
                    alt="card-img"
                    height={100}
                    onClick={() => navigate(`/productInfo/${product_id}`)}
                  />
                  <div className="card-body" key={index}>
                    <h5 className="card-title">
                      {product_title.substring(0, 25)}
                    </h5>
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
                      onClick={()=>DeleteCart(product_id)}
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
        </div>
      </div>
    </>
  );
};

export default ProductCard;
