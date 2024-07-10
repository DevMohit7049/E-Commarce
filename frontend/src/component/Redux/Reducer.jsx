import {
  DELETE_CART_DATA,
  INCREMENT_PRODUCT,
  LOAD_CART_DATA,
  LOAD_PRODUCT,
} from "./Action";

import { cartReducerInitData } from "./InitReducer";
export const cartReducer = (state = cartReducerInitData, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...state, Load_Product_Data: action.payload };

    case LOAD_CART_DATA:
    //   return{...state,Cart_Data:action.payload}
      return {
        ...state,
        Cart_Data:[...state.Cart_Data, action.payload],
      };

    // Delete From Cart //
    case DELETE_CART_DATA:
      const data = state.Cart_Data.filter(
        (element) => element.product_id != action.payload
      );
      return {
        ...state,
        Cart_Data: data,
      };

    // Increment In Cart //
    case INCREMENT_PRODUCT:
      
          return {
          
            Cart_Data:state.Cart_Data.map((product) => product.id === action.payload.id ? { ...product, quantity: product.quantity + 1} : product
           ),
            //  Cart_Data:state.Cart_Data.map((item)=>{
            //     if(item.product_id!=action.payload)
            //     {
            //         console.log('match');
            //     }
            //     else{
            //         console.log('not match');
            //     }
            //  })
          };

      
    default:
      return state;
  }

};
