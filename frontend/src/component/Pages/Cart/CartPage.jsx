import React, { useEffect } from "react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCartData, IncrementProduct, LoadCartData } from "../../Redux/Action";

const CartPage = () => {
  const cartItem = useSelector((state) => state.cartReducer.Cart_Data);
  
  const dispatch = useDispatch();


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);


  const handleIncrement = (id) => {
    console.log(id);
    dispatch(IncrementProduct(id));
};


  const DeleteCart = (id) => {
    dispatch(DeleteCartData(id));
  };

  return (
    <>
      <div className="shoping-cart-container">
        <div className="shopping-cart">
          <h2 className="title">Shopping Cart</h2>
          {cartItem.map((item) => {
           
            const {
              product_id,
              product_img,
              product_price,
              product_title,
              product_category,
              quantity,
            } = item;

            return (
              <>
                <div key={item.product_id} className="item">
                  <div className="image">
                    <img src={product_img} alt={"img"} />
                  </div>

                  <div className="description">
                    <span>{product_title}</span>

                    <div className="desc-item">
                      <p style={{ color: "grey" }}>{item.color}</p>
                      <p style={{ color: "grey" }}>{item.size}</p>
                    </div>

                    <div className="item-price">
                      <p style={{ color: "gray" }}>{product_category}</p>
                      <p>₹{product_price}</p>
                      <p style={{ color: "green", fontWeight: "500" }}>{}</p>
                    </div>
                  </div>
                  <div className="quantity">
                    {/* <button
                      className="plus-btn-one"
                      type="button"
                      name="button">
                      -
                    </button>

                    <input type="text" name="name" value={quantity} /> */}

                    {/* <button
                      className="minus-btn-one"
                      type="button"
                      name="button"
                      onClick={()=>handleIncrement(product_id)}>
                      +
                    </button> */}

                    <div className="trash">
                      <button
                        type="button"
                        onClick={() => DeleteCart(product_id)}
                      >
                        <Trash size={16} style={{ color: "red", fontWeight: "500" }}/>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="second-shoping-cart">
          {cartItem.map((item) => {
            
            const { product_price,product_title} = item;
            return (
              <>
                <div className="title">{product_title}</div>
                <div className="price-details">
                  <p>Price</p>
                  <p>₹{product_price}</p>
                </div>

                {/* <div className="price-details">
                 <p>Discount</p>
                 <p style={{color:'green'}}>-₹3,431</p>
             </div> */}

                <div className="price-details">
                  <p>Delivery Charges</p>
                  <p style={{ color: "green" }}>Free</p>
                </div>

                <div className="price-details">
                  <p style={{ fontWeight: "600" }}>Total Amount</p>
                  <p style={{ fontWeight: "600" }}>₹{product_price}</p>
                </div>

                <button
                  className="btn"
                  style={{ backgroundColor: "#e91e63", color: "#fff" }}
                >
                  Buy Now
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CartPage;
